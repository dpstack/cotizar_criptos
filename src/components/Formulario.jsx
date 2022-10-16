import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { monedas } from '../data/monedas';
import useSelectMonedas from '../hooks/useSelectMonedas';
import Alert from './Alert';

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }

`;

const Formulario = ({ setData }) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
    const [criptomoneda, SelectCriptos] = useSelectMonedas('Elige tu Criptomoneda', criptos);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const response = await fetch(url);
            const result = await response.json();

            const arrayCriptos = result.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                }
                return objeto;
            });
            setCriptos(arrayCriptos);
        }
        consultarAPI();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if ([moneda, criptomoneda].includes('')) {
            setError(true);
            return;
        }
        setError(false);
        setData({ moneda, criptomoneda });
    }

    return (
        <>
            {error && <Alert>Todos los campos son obligatorios!</Alert>}
            <form onSubmit={handleSubmit}>
                <SelectMonedas />
                <SelectCriptos />

                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    )
}

export default Formulario