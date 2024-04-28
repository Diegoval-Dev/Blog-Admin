
import PostsList from '../components/PostsLists';
import '@styles/Home.css';

const Home = () => {
    
    return (
        <div className='home-page'>
            <h1>Blog Posts</h1>
            <PostsList />
        </div>
  );
};

export default Home;