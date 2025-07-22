import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function validarTelefono(numero) {
    // Valida si el número es una cadena de exactamente 8 dígitos numéricos
    return /^\d{8}$/.test(numero);
}

const ComponenteLista = ({ items }) => {

    // Crea una lista de productos basados en un array
    console.log('componentelista.jsx');

    return (

        
        <div>


            <ul className="list-group mb-3">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item">
                        {item.name} - ${item.precio}
                    </li>
                ))}
            </ul>

            {items.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Precio: ${item.precio}</p>
          </div>
        </div>
 ))}
    </div>
    );
};

export default ComponenteLista;

/*
<div className="container mt-4">
            <h2>Lista de Items</h2>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
*/