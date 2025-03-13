import './BoxImage.css'

function BoxImage({imagem, titulo}) {
    return (
        <div className='boxServico'>
            <img src={imagem} alt="Equipamento" />
            <h2>{titulo}</h2>
        </div>
    );
}

export default BoxImage;