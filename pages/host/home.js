import React, { useRef } from 'react';
import SessaoQuatro from '../../components/home/sessaoQuatro';
import SessaoUm from '../../components/home/sessaoUm';
import SessaoDois from '../../components/home/sesssaoDois';
import SessaoTres from '../../components/home/sesssaoTres';

export default function Home() {
    const refSessaoDois = useRef(null);
    function handleBotaoSessaoDois() {
        refSessaoDois.current.scrollIntoView();
    }

    return (
        <React.Fragment>
            <SessaoUm handleBotaoSessaoDois={() => handleBotaoSessaoDois()} />

            <SessaoDois referencia={refSessaoDois} />

            <SessaoTres />

            <SessaoQuatro />
        </React.Fragment >
    )
}
