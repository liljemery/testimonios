import React from "react";

function Vestido(props) {
    return (
      <div className='contenedor-testimonio card mx-3'>
        <img 
          className='imagen-testimonio container'
          src={require(`../imagenes/${props.imagen}.png`)}
          alt='Foto'/>
        <div className='contenedor-texto-testimonio card-body'>
          <p className='nombre-testimonio card-title'>
            <strong>{props.nombre}</strong> de {props.pais}
          </p>
          <p className='cargo-testimonio card-title'>
            {props.cargo} en <strong>{props.empresa}</strong>
          </p>
          <p className='texto-testimonio card-text'>"{props.testimonio}"</p>
        </div>
      </div>
    );
  }
  export default Vestido;