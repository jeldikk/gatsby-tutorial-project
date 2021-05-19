import React from 'react'

const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer className="page-footer">
            <h5></h5>
            <p>&copy; {year} <span>SimplyRecipes</span> Built with <a href="https://gatsbyjs.com/">gatsby</a></p>
        </footer>
    )
}

export default Footer
