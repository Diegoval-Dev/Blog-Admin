import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'

import Login from '@pages/Login'
import Home from '@pages/Home'
import EditPost from '../pages/EditPost'
import Nav from '@components/Nav'
import AdminPage from '@pages/Admin'
import Logout from '@pages/Logout'

const routes = {
    '/': {
        component: Home,
        private: false
    },
    '/login': {
        component: Login,
        private: false
    },
    '/admin': {
        component: AdminPage,
        private: true
    },
    '/edit-post': {
        component: EditPost,
        private: true
    },
    '/logout': {
        component: Logout,
        private: true
    }
}

function Router() {
    const { token } = useToken()
    const { page } = useNavigate()

    let CurrentPage = () => <h1>404</h1>

    if (routes[page]) {
        if (routes[page].private && !token) {
            CurrentPage = Login
        } else {
            CurrentPage = routes[page].component
        }
    }

    if (page == '/logout'){
        window.location.replace('/')
    }

    return (
    <>
        <Nav />
        <CurrentPage />
    </>
    )
}

export default Router