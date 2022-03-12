import React, { Fragment, useEffect, useRef } from 'react';
import SessaoCinco from '../../components/home/sessaoCinco';
import SessaoQuatro from '../../components/home/sessaoQuatro';
import SessaoUm from '../../components/home/sessaoUm';
import SessaoDois from '../../components/home/sesssaoDois';
import SessaoTres from '../../components/home/sesssaoTres';

export default function Home() {
    useEffect(() => {
        document.title = 'Hospede em sua acomodação no Airbnb';
    }, [])

    const refSessaoDois = useRef(null);
    function handleBotaoSessaoDois() {
        refSessaoDois.current.scrollIntoView();
    }

    return (
        <Fragment>
            <SessaoUm handleBotaoSessaoDois={() => handleBotaoSessaoDois()} />
            <SessaoDois referencia={refSessaoDois} />
            <SessaoTres />
            <SessaoQuatro />
            <SessaoCinco />
        </Fragment >
    )
}
