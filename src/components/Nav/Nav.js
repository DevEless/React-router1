import React from 'react'
import {Link } from 'react-router-dom'

function Nav() {
return (
    <div>
        <nav>
        <Link to="/About"> About</Link>
        <Link to="/Bachibre"> Bachibre</Link>
        <Link to="/">Acceuil</Link>
        <Link to="/Liste/:id"> Liste </Link>
        <Link to="/Connexion"> Connexion </Link>
        <Link to="/MyAccount"> Account </Link>
        </nav>
    </div>
)
}

export default Nav