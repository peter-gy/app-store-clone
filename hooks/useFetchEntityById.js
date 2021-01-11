import useFetch from './useFetch';
import { useState, useEffect } from 'react';

const useFetchEntityById = (entity, initialId) => {
    const [id, updateId] = useState(initialId);
    const url = `${process.env.API_BASE_URL}/${entity}/read.php`;
    const params = { id: initialId };
    const { data, isLoading, hasError, errorMessage, updateParams } = useFetch(url, params);
    useEffect(() => updateParams({ id: id }), [id]);
    return { data, isLoading, hasError, errorMessage, updateId };
};

export default useFetchEntityById;
