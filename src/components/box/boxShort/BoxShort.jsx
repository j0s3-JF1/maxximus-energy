import './BoxShort.css';
import { Phone } from 'lucide-react';

function BoxShort({titulo, conteudo, Icon}) {
    return (
        <div className='boxEtapas'>
            {Icon && <Icon size={32} color='#fff' />}
            <h1>{titulo}</h1>
            <label>
                {conteudo}
            </label>
        </div>
    );
}

export default BoxShort;