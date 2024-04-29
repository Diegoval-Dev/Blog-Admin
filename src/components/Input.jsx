import PropTypes from 'prop-types';
import { useState } from 'react';
import '@styles/Input.css';

function Input({ label, type, onChange, placeholder, name }) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e);
    };

    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input
                type={type}
                className="form-control"
                onChange={handleChange}
                value={value || ''}
                placeholder={placeholder}
                name={name}
            />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Input;