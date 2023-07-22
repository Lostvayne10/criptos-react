import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spiner from './components/Spiner';

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Contenedor = styled.div`
  max-width:900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width:80%;
  margin: 100px auto 0 auto;
  display: block;

`

function App() {

  const [ monedas, setMonedas] = useState({})
  const [ resultado, setResultado] = useState({})
  const [ cargando, setCargando] = useState(false)



  useEffect(() => {

    if(Object.keys(monedas).length>0){
        const cotizarCrypto = async () => {
          setCargando(true)
          const {moneda, cripto} = monedas
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`

          const resultado = await(await fetch(url)).json()

          setResultado(resultado.DISPLAY[cripto][moneda])
          setTimeout(() => {
            setCargando(false)
          }, 1000);
        }

        cotizarCrypto();
    }

  }, [monedas])

  return (
    <> 
    <Contenedor>
      <Imagen src={ImagenCripto} alt="imagenes-criptomonedas" ></Imagen>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading> 
        <Formulario setMonedas={setMonedas} />
        {cargando && <Spiner/>}
        { resultado.PRICE && !cargando && <Resultado resultado={resultado}/>  }
      </div>
    </Contenedor>

     
         </>
  )
}

export default App
