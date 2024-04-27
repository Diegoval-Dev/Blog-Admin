import { useState } from 'react';

export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    return [values, handleChange, resetForm];
}