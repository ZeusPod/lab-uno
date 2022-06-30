import React from 'react';
import PropTypes from 'prop-types';
import { ModelContacto } from '../models/model.contacto';


const ContactoComponet = ({contacto}) => {
    return (
        <div>
            <h2>
                Nombre : { contacto.name  }
            </h2>
            <h3>
                Apellido : { contacto.lastname}
            </h3>
            <h3>
                Email : { contacto.email }
            </h3>
            <h5>
                Este usuario esta: { contacto.conection ? "Online": "Offline"}
            </h5>
        </div>
    );
};


ContactoComponet.propTypes = {
    contacto: PropTypes.instanceOf(ModelContacto)
};


export default ContactoComponet;
