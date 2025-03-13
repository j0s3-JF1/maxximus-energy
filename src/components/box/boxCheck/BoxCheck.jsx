import './BoxCheck.css'
import { Check } from 'lucide-react';

function BoxCheck({titulo, conteudo}) {
    return (
        <div className="boxCheck">
            <Check
                size={32}
                color='#fff'
            />
            <h2>{titulo}</h2>
        </div>
    );
}

export default BoxCheck