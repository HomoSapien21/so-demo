interface IndustriesProps {
    subtext: string;
    industries: Industries[];
}

interface Industries {
    title: string;
    description: string;
    list: string[];
    link: string;
}

import '@/styles/Industries.scss'
import { LuArrowRight } from "react-icons/lu";

const Industries = ({ subtext, industries }: IndustriesProps) => {
    return (
        <section className="industries">
            <div className="industries-container">
                <div className="i-top">
                    <h2><span>Industries</span> We Specialize In</h2>
                    <p className="subtext">{subtext}</p>
                </div>
                <div className="i-bottom">
                    {industries.map((industry) => (
                        <div className="industry-item" key={industry.title}>
                            <h3>{industry.title}</h3>
                            <p>{industry.description}</p>
                            <ul>
                                {industry.list.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <a href={industry.link}><LuArrowRight /></a>
                        </div>
                    ))}
                </div>
                <button className="btn">
                    View All Industries
                    <LuArrowRight />
                </button>
            </div>
        </section>
    )
}

export default Industries