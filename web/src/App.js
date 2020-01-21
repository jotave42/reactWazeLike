import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

//<> </> <-- this is a fragment

function App() {
    
    const [devs, setDevs] = useState([]);

    async function loadDevs(){
        const response = await api.get('/devs');
        setDevs(response.data);
    }
    async function hendleAddDev(data){
        const response = await api.post('/devs',data);
        setDevs([...devs, response.data ]);
    }
    
    useEffect(()=>{
        loadDevs();
    },[]);

    return (
        <div id ="app">
            <aside>
                <strong>Cadastrar</strong>
                <DevForm onSubmit = {hendleAddDev} />
            </aside>
            <main>
                <ul>
                    {devs.map(dev =>(
                        <DevItem key={dev._id} dev = {dev} />
                    ))}  
                </ul>  
            </main>
        </div>
    );
}

export default App;
