import React from 'react'
import styled from '@emotion/styled'
import {primeraMayuuscula} from '../helper'


const ContenedorResumen = styled.div`
    padding:1rem;
    text-align:center;
    background-color:#00838F;
    color: #FFF;
    margin-top:1rem;
`;



export const Resumen = ({datos}) => {
    
    //EXTRAER DATOS

    const {marca, year, plan} = datos;
    if(marca === '' || year === '' || plan === ''){return null;} 

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: {primeraMayuuscula(marca)}</li>
                <li>Plan:{primeraMayuuscula(plan)}</li>
                <li>Modelo del carro:{primeraMayuuscula(year)}</li>
            </ul>
        </ContenedorResumen>
    )
}
