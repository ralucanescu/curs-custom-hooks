import {useState, useCallback} from 'react';

export const useFetch = () => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<string>('');

    const fetch = useCallback((endpoint) => window.fetch(endpoint).then(async (response) => {
        const data = await response.json();
        console.log({data})
        if (data.error) {
            setError(data.error)
            return;
        }
        setData(data);
    }).catch((error) => {
        console.log({error})
        setError('Something went wrong.')
    }), []);

    return [data, error, fetch]
}