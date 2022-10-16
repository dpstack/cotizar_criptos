
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import ImagenCripto from './assets/imagen-criptos.png';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
import Resultado from './components/Resultado';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  color: #FFF;
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
    margin: 10px auto 0;
  }

`;

function App() {

  const [data, setData] = useState({});
  const [respuesta, setRespuesta] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      const cotizarCripto = async () => {
        setLoading(true);
        setRespuesta({});
        const { moneda, criptomoneda } = data;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const response = await fetch(url);
        const result = await response.json();
        const img = new Image();
        img.src = "https://cryptocompare.com//media/37746235/ada.png";
        await img.decode();

        setRespuesta(result.DISPLAY[criptomoneda][moneda]);
        setLoading(false);
      }
      cotizarCripto();
    }
  }, [data]);

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Criptos" />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario setData={setData} />
        {loading && <Spinner />}
        {respuesta.PRICE && <Resultado respuesta={respuesta} />}
      </div>
    </Contenedor>
  )
}

export default App