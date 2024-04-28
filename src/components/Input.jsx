import PropTypes from 'prop-types';
import '@styles/Input.css';

function Input({ label, type, value, onChange, placeholder }) {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input
                type={type}
                className="form-control"
                onChange={({ target: { value } }) => onChange(value)}
                value={value || ''}
                placeholder={placeholder}
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
};

export default Input
