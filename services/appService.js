import {selectById} from './baseService'

const endpoint = `${process.env.API_BASE_URL}/app/read.php`

function selectAppById(id) {
    return selectById(endpoint, id);
}

export {selectAppById};