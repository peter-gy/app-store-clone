import React, { useEffect, useState } from 'react';
import SideLayout from '../../components/SideLayout';
import { selectById } from '../../services/crudService';

const entity = 'person';
const selectPersonById = (id) => selectById(entity, id);

const Person = () => {
    const [person, setPerson] = useState({});
    const [id, setId] = useState(1);
    useEffect(() => {
        selectPersonById(id)
            .then((res) => res.json())
            .then((json) => setPerson(json))
            .catch((e) => console.log(e));
    });
    return (
        <SideLayout>
            <div className="container">
                <h1>Hi from person</h1>
                <h2>{JSON.stringify(person)}</h2>
                <input type="text" name="" id="" onChange={(e) => setId(+e.target.value)} />
            </div>
        </SideLayout>
    );
};

export default Person;
