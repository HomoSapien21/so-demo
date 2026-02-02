interface technologiesProps {
    technologies: Technology[];
}

interface Technology {
    image: string;
    title: string;
    subtext: string;
}

import Image from "next/image";
import "@/styles/Technologies.scss";
import { LuArrowRight } from "react-icons/lu";

const Technologies = ({technologies}: technologiesProps) => {
  return (
    <section className="technologies">
        <div className="technologies-container">
            <div className="t-left">
                <h2>We <span>Create New Solutions</span> & Transform Existing Ones with <span>Technologies</span> That Beat Industry-Best Timelines</h2>
                <div className="tech-box" style={{backgroundImage: 'url(/technology-bg.png)'}}>
                   <p>Fuel Your Digital-First Idea</p>
                   <span>With 1600+ Transformation Experts</span>
                   <button className="btn">
                        Innovate with Us 
                        <LuArrowRight />
                    </button>
                </div>
            </div>
            <div className="t-right">
                {technologies.map((technology) => (
                    <div className="tech-item" key={technology.title}>
                        <div className="ti-top">
                            <Image src={technology.image} alt="image" width={100} height={100} />
                            <h3>{technology.title}</h3>
                        </div>
                        <p>{technology.subtext}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Technologies