import React from 'react'

const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top:"90vh",
        width: "100%"
    }
  return (
    <footer className="bg-dark text-light py-5" style = {footerStyle}>
        <p className="text-center"> This is a footer</p>
    </footer>
  )
}

export default Footer
