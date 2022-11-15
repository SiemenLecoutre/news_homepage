import Image from "next/image"
import featuredImageDesktop from '../assets/images/image-web-3-desktop.jpg'
import featuredImageMobile from '../assets/images/image-web-3-mobile.jpg'

function Featured() {
    return (
        <article className='featured'>
            {/* I had a lot of difficulties styling this Image from NextJS */}
            <div className="img-container">
                <Image src={featuredImageDesktop} priority alt='abstract image' className="featured-desktop" height={240} width="auto" />
                <Image src={featuredImageMobile} priority alt='abstract image' className="featured-mobile" height='auto' width={400} />
            </div>
            <div className="grid-item">
                <h1 className="featured-title">The Bright Future of Web 3.0?</h1>
            </div>



            <div className="grid-item">
                <p className="featured-text">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                    But is it really fulfilling its promise?</p>

                <button className="cta-btn">Read More</button>
            </div>


        </article >
    )
}

export default Featured