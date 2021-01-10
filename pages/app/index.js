import React, { useEffect, useState } from 'react';
import { selectById } from '../../services/crudService';

const entity = 'app';
const selectAppById = (id) => selectById(entity, id);

const App = () => {
    const [app, setApp] = useState({});
    const [id, setId] = useState(1);
    useEffect(() => {
        selectAppById(id)
            .then((res) => res.json())
            .then((json) => setApp(json))
            .catch((e) => console.log(e));
    });

    const getImageSrc = (app, w, h) =>
        app.app_logo_url ? app.app_logo_url.replace('1024x1024', `${w}x${h}`) : '';

    return (
        <>
            <h1>Hi from app</h1>
            <p>{app.app_logo_url}</p>
            <input type="text" name="" id="" onChange={(e) => setId(+e.target.value)} />
            <img src={getImageSrc(app, 128, 128) || '/fallback.png'} alt="" />
        </>
    );
};

export default App;
