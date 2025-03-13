import './Header.css';
import { useState } from 'react';
import LogoMaximus from '../../assets/LOGO/logo-nobackground-high.png';
import LogoMaximusSvg from '../../assets/LOGO/logo-nobackground.svg';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 50,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="divHeader">
            <img src={LogoMaximusSvg} alt="Maximus Energy" />
            <div className={`headerOptions ${menuOpen ? 'active' : ''}`}>
                <label onClick={() => scrollToSection("sobre-analise")}>Sobre a Análise</label>
                <label onClick={() => scrollToSection("laudo-eletrico")}>Laudo Elétrico</label>
                <label onClick={() => scrollToSection("eficiencia-energetica")}>Eficiência Energética</label>
                <label onClick={() => scrollToSection("escopo")}>Escopo</label>
                <label onClick={() => scrollToSection("servicos")}>Serviços</label>
            </div>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default Header;