import { useState } from 'react';
import Input from '@components/Input';
import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'

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
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                label="Username"
            />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;