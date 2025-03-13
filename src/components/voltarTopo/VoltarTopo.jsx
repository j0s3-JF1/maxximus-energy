import { ArrowBigUp } from 'lucide-react';
import './VoltarTopo.css';
import { useState, useEffect } from 'react';

function VoltarTopo() {
    const [showButton, setShowButton] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const isAtTop = scrollY === 0;
        const isAtBottom = windowHeight + scrollY >= documentHeight;

        if (isAtTop || isAtBottom) {
            setShowButton(false);
        } else if (scrollY > lastScrollY) {  
            // Usuário rolando para baixo (aparece se não estiver no fim)
            setShowButton(true);
        } else if (scrollY < lastScrollY) { 
            // Usuário rolando para cima (aparece se não estiver no topo)
            setShowButton(true);
        }

        setLastScrollY(scrollY);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <button 
            className={`fixedButton ${showButton ? 'show' : ''}`} 
            onClick={scrollToTop}
        >
            <ArrowBigUp size={24} /> Retornar ao Topo
        </button>
    );
}

export default VoltarTopo;
