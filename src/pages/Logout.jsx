import { useEffect } from 'react'
import useNavigate from "@hooks/useNavigate"
import '@styles/Logout.css'

const Logout = () => {
    const { navigate } = useNavigate()

    useEffect(() => {
        localStorage.clear()

        setTimeout(() => {
            navigate('/')
        }, 1000)
    }, [])

    return (
        <div className='logout-page'>
            <h2>Logging out...</h2>
        </div>
    )
}

export default Logout