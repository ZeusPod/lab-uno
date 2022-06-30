import React from "react";
import {ModelContacto} from "../models/model.contacto";
import ContactoComponet from "../components/ContactoContainer";




const ContactList = ()=>{

    const defaultContact = new ModelContacto("Jose", "Morales", "josseluism@gmail.com")

    return(
        <div>
            <h1>Contactos</h1>
            <ContactoComponet contacto = {defaultContact}></ContactoComponet>
        </div>
    )
}


export default ContactList