import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'

import Login from '@pages/Login'
import Home from '@pages/Home'
import EditPost from '../pages/EditPost'
import Nav from '@components/Nav'

const routes = {
    '/': {
        component: Home,
        private: false
    },
    '/login': {
        component: Login,
        private: false
    },
    '/edit-post': {
        component: EditPost,
        private: true
    },
    '/logout': {
        component: () => {
            return <h1>Logout</h1>
        },
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