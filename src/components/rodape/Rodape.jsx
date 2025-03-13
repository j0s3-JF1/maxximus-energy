import './Rodape.css';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import env from '../../config/Env.js';
import logo from '../../assets/LOGO/logo-nobackground-500.png'

function Rodape() {

    //whatsApp
    const mensagem = "Olá! Gostaria de mais informações."; // Mensagem pré-definida

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${env.whatsAppNumber}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="divRodape">
            <img src={logo} alt="Maxximus Energy" className="logoRodape" />
            <div>
                <h1 className="tituloRodape">Entre em contato para mais informações</h1>
                <div className="iconesRedesSociais">
                    <FaFacebook size={30} color="#4267B2" />
                    <FaTwitter size={30} color="#1DA1F2" />
                    <FaInstagram size={30} color="#C13584" />
                    <FaLinkedin size={30} color="#0077B5" />
                    <FaWhatsapp size={30} color="#25D366" onClick={() => handleWhatsAppClick()} />
                </div>
            </div>
        </div>
    );
}

export default Rodape;