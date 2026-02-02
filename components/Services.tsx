interface ServicesProps {
    subtext: string;
    services: Service[];
}

interface Service {
    image: string;
    title: string;
    description: string;
    link: string;
}

import ServiceCard from "./ServiceCard";
import "@/styles/Services.scss";
import { LuArrowRight } from "react-icons/lu";


const Services = ({subtext, services}: ServicesProps) => {
  return (
    <section className="services">
        <div className="services-container">
            <div className="services-top">
                <h2>Award <span>Winning Services</span> We Provide</h2>
                <p className="subtext">{subtext}</p>
            </div>
            <div className="services-bottom">
                {services.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
            <button className="btn">
                View All Services
                <LuArrowRight />
            </button>
        </div>
    </section>
  )
}

export default Services