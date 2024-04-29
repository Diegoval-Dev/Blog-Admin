import Posts from '@components/Post';
import '@styles/PostsList.css';
import useApi from '@hooks/useApi';
import SkeletonPost from '@components/SkeletonPost';
import { useEffect } from 'react';
import { useState } from 'react';

const PostsList = () => {
    const { response, error, isLoading, execute } = useApi('https://api.diegovalenzuela.me/api/v1/posts', 'get', null);
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        if (response) {
            setPosts(response.data);
        }
    }, [response]);

    useEffect(() => {
        execute();
    }, []);

    if (isLoading) {
        return (
            <div className='skeleton-posts'>
                    <SkeletonPost />
            </div>
        );
    }

    if (response === null) {
        return <div>An error occurred: {error}</div>;
    }

    if (posts.length === 0) {
        return <div className='emptyPosts'>Los Posts, estan vacios</div>;
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