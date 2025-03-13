import './BoxLarger.css';

function BoxLarger({titulo, conteudo, Icon}){
    return (
        <div className='boxLarger'>
            {Icon && <Icon size={42} color='#fff' />}
            <h1>{titulo}</h1>
            <label>
                {conteudo}
            </label>
        </div>
    );
}

export default BoxLarger;