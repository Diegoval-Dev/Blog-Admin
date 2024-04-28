import useToken from '@hooks/useToken';
import useNavigate from '@hooks/useNavigate';

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
                    <a className= {page == '/' ? "nav-link active": "nav-link unactive"} onClick={() => navigate('/')} href='#/'>Home</a>
                </li>
                <li>
                    <a className= {page == '/login' ? "nav-link active": "nav-link unactive"} onClick={() => navigate('/login')} href='#/login'>Login</a>
                </li>
                {isLoggedIn && (
                    <>
                        <li>
                            <a className= {page == '/edit-post' ? "nav-link active": "nav-link unactive"} onClick={() => navigate('/edit-post')} href='#/edit-post'>Edit Post</a>
                        </li>
                        <li>
                            <a className= {page == '/logout' ? "nav-link active": "nav-link unactive"} onClick={() => navigate('/logout')} href='#/logout'>Logout</a>
                        </li>
                        <li>
                            <p>{decodedToken.name}</p>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Nav;