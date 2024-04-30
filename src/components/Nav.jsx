import useToken from '@hooks/useToken';
import useNavigate from '@hooks/useNavigate';
import '@styles/Nav.css';

const Nav = () => {
    const { isLoggedIn, getRawToken } = useToken();
    const { page, navigate } = useNavigate();

    let decodedToken = {};

    if (isLoggedIn) {
        decodedToken = getRawToken();
    }

    return (
        <nav>
            <ul>
                <li>
                    <a className= {page == '/' ? "nav-link active": "nav-link unactive"} onClick={() => navigate('/')} >Home</a>
                </li>
                {!isLoggedIn && (
                    <>
                        <li>
                            <a className= {page == '/login' ? "nav-link active": "nav-link unactive"} onClick={() => navigate('/login')}>Login</a>
                        </li>
                    </>
                )}
                {isLoggedIn && (
                    <>
                        <li>
                            <a className= {page == '/edit-post' ? "nav-link active": "nav-link unactive"} onClick={() => navigate('/edit-post')}>Edit Post</a>
                        </li>
                        <li>
                            <a className= {page == '/create-post' ? "nav-link active": "nav-link unactive"} onClick={() => navigate('/create-post')} >Create Post</a>
                        </li>
                        <li>
                            <a className= {page == '/delete-post' ? "nav-link active": "nav-link unactive"} onClick={() => navigate('/delete-post')} >Delete Post</a>
                        </li>
                        <li>
                            <a className= {page == '/logout' ? "nav-link active": "nav-link unactive"} onClick={() => navigate('/logout')} >
                                <img src='../assets/logout.png' alt='Logout' />
                            </a>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Nav;