import React from 'react'

const Layout = ({ children, title }) => {
  return (
    <>
      <div className="wrapper">
        <h2 className="h2 my-4">{title}</h2>
      </div>
      <div className="wrapper">{children}</div>
    </>
  )
}

export default Layout
