import Image from "next/image";
import Link from "next/link";
import "@/styles/ServiceCard.scss";
import { LuArrowRight } from "react-icons/lu";

interface Service {
    image: string;
    title: string;
    description: string;
    link: string;
}

const ServiceCard = ({image, title, description, link}: Service) => {
    return (
        <div className="service-card">
            <div className="service-card-image">
                <Image src={image} alt="image" width={100} height={100} />
            </div>
            <div className="service-card-content">
                <h3 className="service-card-title">{title}</h3>
                <p className="service-card-description">{description}</p>
                <Link href={link} className="service-card-link"><LuArrowRight /></Link>
            </div>
        </div>
    )
}

export default ServiceCard