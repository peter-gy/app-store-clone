import useFetch from './useFetch';
import { useState, useEffect } from 'react';

const getEndpoint = (entity) => `${process.env.API_BASE_URL}/${entity}/read.php`;

const useFetchEntityById = (entity, initialId) => {
    const [id, updateId] = useState(initialId);
    const url = getEndpoint(entity);
    const params = { id: id };
    const options = { method: 'GET' };
    const { data, isLoading, hasError, errorMessage, updateParams, refetch } = useFetch(
        url,
        params,
        options
    );
    useEffect(() => updateParams({ id: id }), [id]);
    return { data, isLoading, hasError, errorMessage, refetch, updateId };
};

const useFetchEntityRange = (entity, initialLow, initialUp) => {
    const [low, updateLow] = useState(initialLow);
    const [up, updateUp] = useState(initialUp);
    const url = getEndpoint(entity);
    const params = { low: initialLow, up: initialUp };
    const options = { method: 'GET' };
    const { data, isLoading, hasError, errorMessage, updateParams, refetch } = useFetch(
        url,
        params,
        options
    );
    useEffect(() => updateParams({ low: low, up: up }), [low, up]);
    return { data, isLoading, hasError, errorMessage, refetch, updateLow, updateUp };
};

export { useFetchEntityById, useFetchEntityRange };
