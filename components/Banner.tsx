

interface BannerProps {
    image: string;
    spanText: string;
    title: string;
    subtext: string;
    button: string;
    sliderImages: Slides[];
}

interface Slides {
    image: string;
}

import Image from "next/image";
import "@/styles/Banner.scss";


const Banner = ({ image, spanText, title, subtext, button, sliderImages }: BannerProps) => {
    return (
        <section className="banner" style={{ backgroundImage: `url(${image})` }}>
            <div className="banner-container">
                <h1 className="title"><span>{spanText} </span>{title}</h1>
                <p className="subtext">{subtext}</p>
                <button className='global-btn'>{button}</button>

                <div className="featured-wrapper">
                    <p>We're Featured In</p>
                    <div className="images-wrapper">
                        {
                            sliderImages.map((slide, index) => (
                                <Image key={index} src={slide.image} alt="image" width={100} height={35} className="f-image" />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner