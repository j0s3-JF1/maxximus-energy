import './Itens.css';

import { Check } from 'lucide-react';

function Itens({titulo}) {
    return (
        <div className='itensLaudo'>
            <Check
                size={20}
                color='#45a049'
            />
            <label>
                {titulo}
            </label>
        </div>
    );
}

export default Itens;