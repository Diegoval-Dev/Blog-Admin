import { useEffect, useState } from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import useForm from '@hooks/useForm';
import useApi from '@hooks/useApi';
import useToken from '@hooks/useToken';
import '@styles/editPost.css';

const EditPost = () => {
    const { token } = useToken(); 
    const[postId, setPostId] = useState('');
    const [postData, setPostData] = useState(null);
    const { values, handleChange, resetForm, fillForm } = useForm({ postId: '', title: '', content: '', bannerImageB64: '', category: '' });
    const { response: post, execute: getPost } = useApi(`https://api.diegovalenzuela.me/api/v1/posts/${values.postId}`, 'get');
    const { execute: updatePost } = useApi(`https://api.diegovalenzuela.me/api/v1/posts/${values.postId}`, 'put', null, {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    useEffect(() => {
        if (post) {
            console.log("Post encontrado", post);
            setPostData(post);
        }
    }, [post]);

    useEffect(() => {
        if (postData) {
            const postUnique = postData["data"][0];
            fillForm({
                postId: postUnique["id"],
                title: postUnique["title"],
                content: postUnique["content"],
                bannerImageB64: postUnique["bannerImageB64"],
                category: postUnique["category"]
            });
            
        }
    }, [postData]);

    
    const handleGetPost = () => {
        if (postId) {
            getPost();
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(values);
        updatePost(values);
        resetForm();
    };

    return (
        <div className='editPost-page'>
            <h2>Edit Post</h2>
            <div className='search-post'>
                <Input
                    type="text"
                    name="postId"
                    value={postId}
                    onChange={(e) => setPostId(e.target.value)}
                    placeholder="Post ID"
                    label="Post ID"
                />
                <Button text="Get Post" onClick={handleGetPost}></Button>
            </div>
            <form onSubmit={handleSubmit} className='editPost-form'>

                <Input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    editValue={values.title}
                    placeholder="Title"
                    label="Title"
                />

                <Input
                    type="textarea"
                    name="content"
                    onChange={handleChange}
                    editValue={values.content}
                    placeholder="Content"
                    label="Content"
                />

                <Input
                    type="file"
                    name="bannerImageB64"
                    onChange={handleChange}
                    placeholder="Banner Image"
                    label="Banner Image"
                />

                <Input
                    type="text"
                    name="category"
                    onChange={handleChange}
                    editValue={values.category}
                    placeholder="Category"
                    label="Category"
                />

                <Button type="submit" text="Update Post"></Button>
            </form>
        </div>
    );
};

export default EditPost;