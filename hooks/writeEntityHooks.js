import useFetch from './useFetch';
import { useState, useEffect } from 'react';

const getPostOptions = (data) => {
    const body = new URLSearchParams();
    for (let [key, value] of Object.entries(data)) body.append(key, value);
    return { method: 'POST', body: body };
};

const useWriteEntity = (operation, entity, initialEntityData) => {
    const [entityData, setEntityData] = useState(initialEntityData);
    const url = `${process.env.API_BASE_URL}/${entity}/${operation}.php`;
    const options = getPostOptions(entityData);
    const { data, isLoading, hasError, errorMessage, updateOptions } = useFetch(url, {}, options);
    useEffect(() => updateOptions(getPostOptions(entityData)), [entityData]);
    return { data, isLoading, hasError, errorMessage, setEntityData };
};

const useCreateEntity = (entity, initialEntityData) =>
    useWriteEntity('create', entity, initialEntityData);

const useUpdateEntity = (entity, initialEntityData) =>
    useWriteEntity('update', entity, initialEntityData);

const useDeleteEntity = (entity, initialEntityData) =>
    useWriteEntity('delete', entity, initialEntityData);

export { useCreateEntity, useUpdateEntity, useDeleteEntity };
