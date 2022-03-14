import React, { Fragment, useEffect, useRef, useState } from 'react';
import SessaoCinco from '../../components/home/sessaoCinco';
import SessaoDois from '../../components/home/sessaoDois';
import SessaoQuatro from '../../components/home/sessaoQuatro';
import SessaoTres from '../../components/home/sessaoTres';
import SessaoUm from '../../components/home/sessaoUm';
import ModalCadastrar from '../../components/modal/modalCadastrar';
import ModalWrapper from '../../components/outros/modalWrapper';

export default function Home() {
    useEffect(() => {
        document.title = 'Hospede em sua acomodação no Airbnb';
    }, [])

    const refSessaoDois = useRef(null);
    function handleBotaoSessaoDois() {
        refSessaoDois.current.scrollIntoView();
    }

    const [modalCadastrar, setModalCadastrar] = useState(false);
    function handleModalCadastrar() {
        setModalCadastrar(!modalCadastrar);
    }

    return (
        <Fragment>
            <SessaoUm handleBotaoSessaoDois={() => handleBotaoSessaoDois()} handleModalCadastrar={() => handleModalCadastrar()} />
            <SessaoDois referencia={refSessaoDois} />
            <SessaoTres />
            <SessaoQuatro />
            <SessaoCinco handleModalCadastrar={() => handleModalCadastrar()} />

            {/* Modal para se cadastrar */}
            <ModalWrapper isOpen={modalCadastrar}>
                <ModalCadastrar handleModal={() => handleModalCadastrar()} />
            </ModalWrapper>
        </Fragment >
    )
}
