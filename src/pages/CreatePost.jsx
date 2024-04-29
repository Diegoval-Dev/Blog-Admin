import React from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import useForm from '@hooks/useForm';
import useApi from '@hooks/useApi';
import useToken from '@hooks/useToken'; 
const CreatePost = () => {
    const { values, handleChange, resetForm } = useForm({ title: '', content: '' });
    const { token } = useToken(); 
    const { response, error, isLoading, execute } = useApi('https://api.diegovalenzuela.me/api/v1/posts', 'post', null, {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        await execute(values);
        resetForm();
    };

    return (
        <div>
            <h1>Create New Post</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    placeholder="Title"
                    label="Title"
                />

                <Input
                    type="textarea"
                    name="content"
                    value={values.content}
                    onChange={handleChange}
                    placeholder="Content"
                    label="Content"
                />

                <Button type="submit" text="Create Post"></Button>
            </form>
        </div>
    );
};

export default CreatePost;