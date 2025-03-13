import './InputForm.css';

function InputForm({ titulo, placeholder, name, value, onChange }) {
    return (
        <>
            <label>{titulo}</label>
            <input
                type="text"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    );
}

export default InputForm;