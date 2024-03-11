'use client'

import { useEffect } from 'react'

export default function GoogleLogin() {
  let url = ''
  useEffect(() => {
    url = window.location.href
    if (url) {
      opener?.postMessage({
        token: url.match(/access_token=([^&]*)/)?.[1],
        type: 'google',
      }, 'https://maeumgagym-main-stag.xquare.app')
      window.close()
    }
  }, [])

  return <p>{url}</p>
}
