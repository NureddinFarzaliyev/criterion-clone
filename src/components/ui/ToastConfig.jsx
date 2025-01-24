import React from 'react'
import { Slide, ToastContainer } from 'react-toastify'

const ToastConfig = () => {
  return (
    <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Slide}
        />
  )
}

export default ToastConfig
