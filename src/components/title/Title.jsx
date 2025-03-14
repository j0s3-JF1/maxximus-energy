import './Title.css';

function Title({ titulo, corFundo }) {
    return (
        <>
            <h1 className='titulo'>{titulo}</h1>
            <hr 
                className='linha'
                style={{
                    backgroundColor: corFundo,
                    border: "none"
                }}
            />
        </>
    );
}

export default Title;