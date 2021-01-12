import { useState, useEffect, useRef } from 'react';

/**
 * Source: https://medium.com/swlh/usefetch-a-custom-react-hook-36d5f5819d8
 * @param {string} initialUrl - the initial url to be fetched
 * @param {object} initialParams - initial url query parameters
 * @param {boolean} initialSkip - set to true if the fist fetch should in the `didMount` stage should be skipped
 */
const useFetch = (initialUrl, initialParams = {}, initialOptions = {}, skip = false) => {
    const [url, updateUrl] = useState(initialUrl);
    const [params, updateParams] = useState(initialParams);
    const [options, updateOptions] = useState(initialOptions);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [refetchIndex, setRefetchIndex] = useState(0);

    const queryString = Object.keys(params)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&');

    const refetch = () => setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${url}?${queryString}`, options);
                const result = await response.json();
                if (response.ok) {
                    setData(result);
                } else {
                    setHasError(true);
                    setErrorMessage(result);
                }
                setIsLoading(false);
            } catch (err) {
                setHasError(true);
                setErrorMessage(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url, params, options, refetchIndex]);

    return {
        data,
        isLoading,
        hasError,
        errorMessage,
        updateUrl,
        updateParams,
        updateOptions,
        refetch
    };
};

export default useFetch;
