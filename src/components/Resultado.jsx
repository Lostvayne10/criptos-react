import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: start;
    gap: 3rem;
    margin-top: 30px;
`;

const Texto = styled.p`
    font-size: 16px;
    span{
        font-weight: 700;
    }
`;
const Precio = styled.p`
    font-size: 24;
    span{
        font-weight: 700;
    }
`;

const Imagen = styled.img`
    display: flex;
    width: 120px;

`;


function Resultado({resultado}) {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado


  return (
    <Contenedor>
        <Imagen
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt="Imagen Crypto"
        />
        <div>
            <Precio>
                El precio es de : <span>{PRICE}</span>
            </Precio>
            <Texto>
                Precio mas Alto del Dia : <span>{HIGHDAY}</span>
            </Texto>
            <Texto>
                Precio mas Bajo del Dia : <span>{LOWDAY}</span>
            </Texto>
            <Texto>
                Variacion ultimas 24 hrs : <span>{CHANGEPCT24HOUR}</span>
            </Texto>
            <Texto>
                Ultima Actualizacion : <span>{LASTUPDATE}</span>
            </Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado