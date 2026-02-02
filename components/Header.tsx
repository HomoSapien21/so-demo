import Image from "next/image";
import Link from "next/link";
import "@/styles/Header.scss";

interface NavLink {
    title: string;
    href: string;
}

interface HeaderProps {
    logo: string;
    navLinks: NavLink[];
    button: string;
}


const Header = ({ logo, navLinks,button }: HeaderProps) => {
  return (
    <header>
        <div className="header-container">
            <div className="logo">
                <Link href="/">
                    <Image 
                        src={logo} 
                        alt="Logo" 
                        width={275}
                        height={50}
                    />
                </Link>
            </div>
            <div className="header-links">
                <nav>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <Link href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="global-btn">{button}</button>
            </div>
        </div>
    </header>
  )
}

export default Header