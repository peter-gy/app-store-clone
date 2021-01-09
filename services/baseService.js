function selectById(endpoint, id) {
    let url = new URL(endpoint), 
        params = {id: id},
        settings = {method: 'GET'};
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    return fetch(url, settings);
}

export {selectById};