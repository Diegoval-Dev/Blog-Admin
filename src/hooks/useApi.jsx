import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url, method, initialData = null, headers = null) => {
    const [data, setData] = useState(initialData);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const execute = async (data) => {
        setIsLoading(true);
        try {
            let res;
            if (method === 'get') {
                res = await axios.get(url, { headers });
            } else if (method === 'post') {
                res = await axios.post(url, data, { headers });
            } else if (method === 'put') {
                res = await axios.put(url, data, { headers });
            } else if (method === 'delete') {
                res = await axios.delete(url, { headers });
            }
            setResponse(res.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (data !== initialData) {
            execute(data);
        }
    }, [data]);

    return { response, error, isLoading, execute };
};

export default useApi;