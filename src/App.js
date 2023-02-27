import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./components/Home/About";
import Bachibre from "./components/Bachibre/Bachibre";
import Liste from "./components/Liste/Liste";
import Connexion from "./components/Connexion/Connexion";
import MyAccount from "./components/MyAccount/MyAccount";
import Error from "./components/Error/Error";
import RootLayout from "./components/layout/RootLayout";
import React from "react";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      
        <Route path="/About" element={<About />} />
        <Route path="/Bachibre" element={<Bachibre />} />
        <Route path='/Liste/:id' element={<Liste />} />
        <Route path='/*' element={<Error/> } />
        <Route path='/Connexion' element={<Connexion />} />
        <Route path='MyAccount' element={<MyAccount />} />
    </Route>
  )
);


function App() {
  return (


    <RouterProvider router={router} />


  )
}

export default App






// ## Exercice 6
// Ajouter un component Connection qui va contenir un formulaire pour pouvoir se connecter. La route sera '/connection'. Créer un component MyAccount qui va afficher les informations de la personne connectée. La route de MyaAccount sera '/my-account' Utiliser le component Form de React Router pour le component de connection.

// ## Exercice 7
// Sur la page MyAaccount rajouter un bouton edit qui va rediriger vers un route qui permettra de changer les informations de l'utilisateur connecté. Utilser le component Form de React Router.