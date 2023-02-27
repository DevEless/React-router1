import React from 'react'
import { Form, useLoaderData } from "react-router-dom";
import { useState } from 'react'
function Connexion() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
    };
return (
    <div>
        <h2>Tout casser</h2>
        <Form onSubmit={handleSubmit} method='post' action ='/MyAccount'>
        <input type='texte' placeholder='Nom' value={username} onChange={(event) => setUsername(event.target.value)}/>
        <input type='texte' placeholder='mdp' value={password} onChange={(event) => setPassword(event.target.value)}/>

        <button type='submit'> se connectar </button>
        

        
        </Form>
        
    </div>
    
)
}

export default Connexion