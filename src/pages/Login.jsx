import { useState } from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'
import useApi from '@hooks/useApi';
import useForm from '@hooks/useForm';
import { useEffect } from 'react';
import '@styles/Login.css';

const Login = () => {
    const {setToken} = useToken();
    const {navigate} = useNavigate();
    const {response, error, isLoading, execute} = useApi('https://api.diegovalenzuela.me/api/v1/auth/login', 'post', null);
    const [values, handleChange, resetForm] = useForm({username: '', password: ''});
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values)
        execute(values);
        resetForm();
    };

    useEffect(() => {
        if (response) {
            console.log(response);
            setToken(response.data.token);
            navigate('/admin');
        }
        console.log("RES",response)
    }, [response]);

    return (
        <div className='login-page'>
            <form className='form-login' onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="Username"
                    label="Username"
                />
                <Input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                    label="Password"
                />
                <Button type="submit" text="Login"></Button>
            </form>
        </div>
    );
};

export default Login;