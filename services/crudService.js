/**
 * Constructs the API endpoint based on the supplied parameters.
 * @param {string} entity - 'person' | 'developer' | 'app'
 * @param {string} operation - 'create' | 'read' | 'update' | 'delete'
 */
const getEndpoint = (entity, operation) => `${process.env.API_BASE_URL}/${entity}/${operation}.php`;

/**
 * Returns a promise from the fetch of the following endpoint:
 * `${process.env.API_BASE_URL}/${entity}/read.php`
 * @param {string} entity - 'person' | 'developer' | 'app'
 * @param {number} id - the id of the entity to be selected
 */
const selectById = (entity, id) => {
    const endpoint = getEndpoint(entity, 'read');
    let url = new URL(endpoint),
        params = { id: id },
        settings = { method: 'GET' };
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    return fetch(url, settings);
};

export { selectById };
