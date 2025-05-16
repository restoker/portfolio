'use client';
import React from 'react'
import ReactLenis from "lenis/react";

const Layout = ({ children }) => {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}

export default Layout