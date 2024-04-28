import React from 'react';
import useForm from '../hooks/useForm';

function PostForm({ onSubmit }) {
    const [values, handleChange, resetForm] = useForm({
        title: '',
        content: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(values);
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" value={values.title} onChange={handleChange} />
            <textarea name="content" value={values.content} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default PostForm;