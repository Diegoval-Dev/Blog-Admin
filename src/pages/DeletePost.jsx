import React, { useState } from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import useForm from '@hooks/useForm';
import useApi from '@hooks/useApi';
import useToken from '@hooks/useToken';
import '@styles/DeletePost.css';

const DeletePost = () => {
    const { token } = useToken();
    const [postId, setPostId] = useState('');
    const { values, handleChange, resetForm, fillForm } = useForm({ postId: '' });
    const { execute } = useApi(`https://api.diegovalenzuela.me/api/v1/posts/${values.postId}`, 'delete', null, {
        'Content-Type': 'application',
        'Authorization': `Bearer ${token}`
    });

    const handleDeletePost = async (event) => {
        event.preventDefault();
        console.log("el post que se eliminara es:",values.postId);
        execute(values);
        resetForm();
    }

    return (
        <div className='deletePost-page'>
            <h2>Delete Post</h2>
            <form onSubmit={handleDeletePost}>
                <Input
                    type="text"
                    name="postId"
                    value={values.postId}
                    onChange={handleChange}
                    placeholder="Post ID"
                    label="Post ID"
                />
                <Button type="submit" text="Delete Post"></Button>
            </form>
        </div>
    );
};

export default DeletePost;