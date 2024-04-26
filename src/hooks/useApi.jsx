import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url, method, data = null) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res;
                if (method === 'get') {
                    res = await axios.get(url);
                } else if (method === 'post') {
                    res = await axios.post(url, data);
                } else if (method === 'put') {
                    res = await axios.put(url, data);
                } else if (method === 'delete') {
                    res = await axios.delete(url);
                }
                setResponse(res.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url, method, data]);
    
    return { response, error, isLoading };
};

export default useApi;