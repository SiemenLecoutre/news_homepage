import Image from "next/image"
import { useState, useEffect } from "react"
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-menu.svg'

function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    useEffect(() => {
        // Stop scrolling when mobile nav is open
        mobileNavOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
    }, [mobileNavOpen]);

    return (
        <nav>
            <ul className="desktop-nav">
                <li><a href="/"><Image src={logo} alt='news website logo' /></a></li>
                <li><a href="/">Home</a></li>
                <li><a href="#">New</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Categories</a></li>
            </ul>

            <ul className="mobile-nav">
                <li><a href="/"><Image src={logo} alt='news website logo' /></a></li>
                <li><button onClick={() => setMobileNavOpen(prevValue => !prevValue)} className="hamburger"><Image src={hamburger} /></button></li>
            </ul>

            {mobileNavOpen && (
                <div className="mobile-menu">
                    <ul className="mobile-grid">
                        <li><button onClick={() => setMobileNavOpen(prevValue => !prevValue)} className="hamburger"><Image src={hamburger} /></button></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">New</a></li>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">Categories</a></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar