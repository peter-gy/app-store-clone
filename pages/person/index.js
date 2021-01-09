import React, {useEffect, useState} from 'react';
import {selectPersonById} from '../../services/personService';

const Person = () => {
    const [person, setPerson] = useState({})
    const [id, setId] = useState(1)
    useEffect(() => {
        selectPersonById(id)
        .then(res => res.json())
        .then(json => setPerson(json))
        .catch(e => console.log(e))
    });
    return (
    <>
        <h1>Hi from person</h1>
        <h2>{JSON.stringify(person)}</h2>
        <input type="text" name="" id="" onChange={(e) => setId(+e.target.value)}/>
    </>)
}

export default Person;