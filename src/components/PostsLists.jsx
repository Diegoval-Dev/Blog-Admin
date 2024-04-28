import Posts from '@components/Post';
import '@styles/PostsList.css';
import useApi from '../hooks/useApi';
import { useEffect } from 'react';
import { useState } from 'react';

const PostsList = () => {
    const { response, error, isLoading } = useApi('https://api.diegovalenzuela.me/api/v1/posts', 'get');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        if (response) {
            setPosts(response.data);
        }
    }, [response]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (response === null) {
        return <div>An error occurred: {error.message}</div>;
    }

    if (posts.length === 0) {
        return <div>Los Posts, estan vacios</div>;
    }

    
    return (
        <div className='posts-list'>
            {posts.map((post) => (
                <Posts key={post.id} post={post} />
            ))}
        </div>
    );
};


export default PostsList;