import { useState } from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'
import '@styles/Login.css';

const Login = () => {
    const {setToken} = useToken();
    const {navigate} = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
    };

    return (
        <div className='login-page'>
            <form className='form-login' onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    label="Username"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    label="Password"
                />
                <Button type="submit" text="Login"></Button>
            </form>
        </div>
    );
};

export default Login;