import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-menu-close.svg'

function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    useEffect(() => {
        // Stop scrolling when mobile nav is open
        mobileNavOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
    }, [mobileNavOpen]);

    return (
        <nav>
            <ul className="desktop-nav">
                <li><Link href="/"><Image src={logo} alt='news website logo' /></Link></li>
                <li><Link href="/">Home</Link></li>
                <li><Link href="#">New</Link></li>
                <li><Link href="#">Popular</Link></li>
                <li><Link href="#">Trending</Link></li>
                <li><Link href="#">Categories</Link></li>
            </ul>

            <ul className="mobile-nav">
                <li><Link href="/"><Image src={logo} alt='news website logo' /></Link></li>
                <li><button onClick={() => setMobileNavOpen(prevValue => !prevValue)} className="hamburger"><Image src={hamburger} /></button></li>
            </ul>

            {mobileNavOpen && (
                <div className="mobile-menu">
                    <ul className="mobile-grid">
                        <li><button onClick={() => setMobileNavOpen(prevValue => !prevValue)} className="hamburger"><Image src={close} /></button></li>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#">New</Link></li>
                        <li><Link href="#">Popular</Link></li>
                        <li><Link href="#">Trending</Link></li>
                        <li><Link href="#">Categories</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar