import './InputForm.css';

function InputForm({ titulo, placeholder, name, value, onChange }) {
    return (
        <>
            <div className='inputForm'>
                <input
                    type="text"
                    id={name}
                    placeholder={""}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <label htmlFor={name}>{titulo}</label>
            </div>
        </>
    );
}

export default InputForm;