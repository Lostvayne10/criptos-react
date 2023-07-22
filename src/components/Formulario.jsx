import { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas';
import { Monedas } from '../data/monedas';
import Error from './Error';


const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    &:hover {
        background-color: #7A7DFE;
    }
    margin-top: 15px;
`;

function Formulario({setMonedas}) {

    
    const [ criptos, setCryptos ] = useState([])
    const [ error, setError ] = useState(false)

    const [ moneda,  SelectMonedas ] = useSelectMonedas('Elige Tu Moneda', Monedas)
    const [ cripto,  SelectCriptos ] = useSelectMonedas('Elige Tu CriptoMoneda', criptos)


    const handleSumit = (e) => {
        e.preventDefault()
        if([moneda, cripto].includes('')){
            setError(true)
            return;
        }
        setError(false)
        setMonedas({moneda, cripto})
    }
    
    useEffect(()=>{
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

            const resultado = await  (await fetch(url)).json()
            const arrayCriptos = resultado.Data.map( cripto => {
                const  objecto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                return objecto
            })

            setCryptos(arrayCriptos)

        }
        consultarAPI()
    },[])

    return (
        <>
        {error && <Error>Todos los campos son obligatorios</Error>}
      

            <form onSubmit={handleSumit}>
                <SelectMonedas/>
                <SelectCriptos/>
                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    )
}

export default Formulario