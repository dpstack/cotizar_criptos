import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
    color: #FFF;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    text-align: center;
    border-radius: 10px;
    background-image:
        linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%),
        linear-gradient(to right, #ccc, #ccc);
    background-position:
        calc(100% - 23px) calc(1em + 4px),
        calc(100% - 18px) calc(1em + 4px),
        calc(100% - 2.5em) 0.6em;
    background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
    background-repeat: no-repeat;
    appearance: none!important;
`;

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('');

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select value={state} onChange={ e => setState(e.target.value) } >
                <option value="" disabled> -- Seleccione --</option>
                {
                    opciones.map(({id, nombre}) => (
                        <option
                            key={id}
                            value={id}
                        >{nombre}</option>
                    ))
                }
            </Select>
        </>
    )

    return [ state, SelectMonedas ];

}

export default useSelectMonedas