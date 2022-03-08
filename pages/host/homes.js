import React, { useRef } from 'react';
import SessaoUm from '../../components/homes/sessaoUm';
import SessaoDois from '../../components/homes/sesssaoDois';

export default function Homes() {
    const refSessaoDois = useRef(null);
    function handleBotaoSessaoDois() {
        refSessaoDois.current.scrollIntoView();
    }

    return (
        <React.Fragment>
            <SessaoUm handleBotaoSessaoDois={() => handleBotaoSessaoDois()} />

            <SessaoDois referencia={refSessaoDois} />
        </React.Fragment >
    )
}
