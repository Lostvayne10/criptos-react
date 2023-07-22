import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;

const Select = styled.select`
    width: 100%;
    font-size: 18ox;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 15px;

`;

function useSelectMonedas(label, opciones) {

    const [state, setState] = useState('')

    const SelectMonedas = () => (
        <>
            <Label htmlFor="">{label}</Label>
            <Select 
                value={state}
                onChange={ e => setState(e.target.value)}
            >
                <option value="">Seleccionar</option>
                {opciones.map(
                    opc => (
                        <option
                            key={opc.id}
                            value={opc.id}
                        >
                            {opc.nombre}
                        </option>
                    )
                )}
            </Select>


        </>
    )

    return [
       state, SelectMonedas
    ]
}

export default useSelectMonedas