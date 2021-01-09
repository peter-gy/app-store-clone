import {selectById} from './baseService'

const endpoint = `${process.env.API_BASE_URL}/person/read.php`

function selectPersonById(id) {
    return selectById(endpoint, id);
}

export {selectPersonById};