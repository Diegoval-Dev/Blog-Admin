import Input from '@components/Input';
import Button from '@components/Button';
import useForm from '@hooks/useForm';
import useApi from '@hooks/useApi';
import useToken from '@hooks/useToken'; 
import { useRef } from 'react';
import '@styles/CreatePost.css';

const CreatePost = () => {
    const fileInputRef = useRef();
    const { values, handleChange, resetForm } = useForm({ title: '', content: '', bannerImageB64: '', category: ''});
    const { token } = useToken(); 
    const { response, error, isLoading, execute } = useApi('https://api.diegovalenzuela.me/api/v1/posts', 'post', null, {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            handleChange({ target: { name: 'bannerImageB64', value: reader.result } });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(values);
        await execute(values);
        resetForm();
        alert('Post created successfully');
    };

    return (
        <div className='createPost-page'>
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

                <Input
                    type="file"
                    name="bannerImageB64"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    placeholder="Banner Image"
                    label="Banner Image"
                />

                <Input
                    type="text"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    placeholder="Category"
                    label="Category"
                />

                <Button type="submit" text="Create Post"></Button>
            </form>
        </div>
    );
};

export default CreatePost;