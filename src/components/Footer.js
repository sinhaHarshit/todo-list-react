import React from 'react'

const Footer = () => {
    let footerStyle = {
        position: "relative",
        left: "0",
        top: "10vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light py-5" style={footerStyle}>
            <p className="text-center"> This is a footer</p>
        </footer>
    )
}

export default Footer
