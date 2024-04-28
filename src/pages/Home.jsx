
import useApi from '../hooks/useApi';
import Post from '../components/Post';

const Home = () => {
    //const { response: posts, error, isLoading } = useApi('https://api.diegovalenzuela.me/api/v1/posts', 'get');

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>An error occurred: {error.message}</div>;
    // }

    return (
        <>
            <h1>Blog Posts</h1>
            {/* {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))} */}
        </>
  );
};

export default Home;