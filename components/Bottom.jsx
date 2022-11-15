import Image from "next/image"
import Link from "next/link"
import retropcImage from '../assets/images/image-retro-pcs.jpg'
import laptopImage from '../assets/images/image-top-laptops.jpg'
import gamingImage from '../assets/images/image-gaming-growth.jpg'

function Bottom() {
    return (
        <section className="bottom">

            <article>
                <div className="img-wrapper">
                    <Image src={retropcImage} alt='retro pc' height={120} width='auto' />
                </div>

                <div>
                    <h2>01</h2>
                    <h1><Link href="#">Reviving Retro PCs</Link></h1>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>

            </article>

            <article>
                <div className="img-wrapper">
                    <Image src={laptopImage} alt='close up of a keyboard' height={120} width='auto' />
                </div>

                <div>
                    <h2>02</h2>
                    <h1><Link href="#">Top 10 Laptops of 2022</Link></h1>
                    <p>Our best picks for various needs and budgets.</p>
                </div>

            </article>

            <article>
                <div className="img-wrapper">
                    <Image src={gamingImage} alt='hand throwing a controller in the air' height={120} width='auto' />
                </div>

                <div>
                    <h2>03</h2>
                    <h1><Link href="#">The Growth of Gaming</Link></h1>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>

            </article>

        </section>
    )
}

export default Bottom