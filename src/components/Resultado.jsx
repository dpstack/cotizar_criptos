import styled from "@emotion/styled";

const Respuesta = styled.div`
    color: #FFF;

    display: flex;
    align-items: center;
    gap: 2rem;
`;

const Imagen = styled.img`
    display: block;
    width: 120px;
`;

const Texto = styled.p`
    font-size: 18px;
    span { font-weight: 700; }
`;

const Precio = styled.p`
    font-size: 24px;
    span { font-weight: 700; }
`;

const Resultado = ({ respuesta }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = respuesta;

    return (
        <Respuesta>
            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="Imagen Cripto"
            />
            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Respuesta>
    )
}

export default Resultado