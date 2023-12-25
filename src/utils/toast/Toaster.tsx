"use client"
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, CloseCircle } from "@/assets";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const variants = {
  init: { y: -50, scale: 0, opacity: 0, originY: -1 },
  open: { y: 0, scale: 1, opacity: 1, originY: 0 },
  closed: { y: -50, scale: 0, opacity: 0, transition: { duration: 0.3, delay: 0.1 }, originY: -1 }
}

const Toaster = () => {
  const data = useSelector((state: RootState) => state.toast);

  return (
    <motion.nav
      className="fixed w-full h-full top-0 pt-5 flex flex-col-reverse items-center justify-end gap-3 pointer-events-none box-border"
      layout
      layoutRoot
      >
        <AnimatePresence mode="popLayout">
      {
        data.map((value) => (
          <motion.div
            className={`bg-[rgba(255,255,255,0.64)] px-6 py-[18px] shadow-[0px_4px_12px_8px_rgba(0,0,0,0.12)] rounded-2xl backdrop-blur-md flex gap-2 pointer-events-auto origin-[top_center] box-border`}
            initial={"init"}
            layout
            animate={"open"}
            exit={"closed"}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            variants={variants}
            key={value.id}
            layoutId={value.id}
            style={{ originX: 0.5 }}
          >
            {
              value.type === "loading" ?
                <div className="w-5 h-5 border-2 border-gray100 border-t-gray900 rounded-full animate-spin" />
                :
                value.type === "error" ?
                  <CloseCircle size={20} className="text-red500" />
                  :
                  <CheckCircle isFill size={20} className="text-blue500" />
            }
            <span className="text-bodyMedium text-black whitespace-nowrap">{value.message}</span>
          </motion.div>
        ))
      }
      </AnimatePresence>
    </motion.nav>
  )
}

export default Toaster;