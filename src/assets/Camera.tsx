interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Camera = ({
  size = 24,
  onClick,
  className
}: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className={`cursor-pointer ${className}`}
    >
      <path d="M3 18V9C3 7.89543 3.89543 7 5 7H6.55848C7.41934 7 8.18362 6.44913 8.45585 5.63245L8.54415 5.36755C8.81638 4.55087 9.58066 4 10.4415 4H13.5585C14.4193 4 15.1836 4.55087 15.4558 5.36755L15.5442 5.63245C15.8164 6.44913 16.5807 7 17.4415 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}