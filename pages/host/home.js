import React, { Fragment, useEffect, useRef, useState } from 'react';
import Navbar from '../../components/home/outros/navbar';
import SessaoUm from '../../components/home/sessao1';
import SessaoDois from '../../components/home/sessao2';
import SessaoTres from '../../components/home/sessao3';
import SessaoQuatro from '../../components/home/sessao4';
import SessaoCinco from '../../components/home/sessao5';
import ModalCadastrar from '../../components/modal/modalCadastrar';
import { Aviso } from '../../components/outros/aviso';
import ModalWrapper from '../../components/outros/modalWrapper';
import EmojiAleatorio from '../../utils/outros/emojiAleatorio';

export default function Home() {
    const refSessaoDois = useRef(null);
    function handleBotaoSessaoDois() {
        refSessaoDois.current.scrollIntoView();
    }

    const [modalCadastrar, setModalCadastrar] = useState(false);
    function handleModalCadastrar() {
        setModalCadastrar(!modalCadastrar);
    }

    const [mostrarNavbar, setMostrarNavbar] = useState(false);
    useEffect(() => {
        // Scroll: https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js;
        function handleScroll(e) {
            const window = e.currentTarget;
            const yAtual = window.scrollY;
            // console.log(`Sessão dois: ${ySessaoDois}. Atual: ${yAtual}`);

            if (yAtual >= ySessaoDois) {
                // console.log('Chegou na sessão dois');
                setMostrarNavbar(true);
            } else {
                setMostrarNavbar(false);
            }
        }

        // Guardar a posição Y da sessão 2, para que quando o Y atual atingí-la, mostrar o navbar;
        const rect = refSessaoDois.current.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;
        const ySessaoDois = scrollTop + rect.top;
        // console.log(ySessaoDois);

        // Scroll;
        window.addEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Título da página;
        document.title = 'Hospede em sua acomodação no Airbnb — Em React.js, Next.js | junioranheu';

        // Aviso;
        const msg =
            `Olá! ${EmojiAleatorio()}<br/><br/> 
          Essa página foi replicada, sem fins lucrativos, a fim de estudo apenas, utilizando React.js e Next.js, a partir de um projeto real, de uma empresa real.<br/><br/> 
          Feito por @junioranheu<br/><br/> 
          Todos os direitos reservados à @airbnb`;
        Aviso.custom(msg, 20000);
    }, []);

    return (
        <Fragment>
            {/* Navbar */}
            {mostrarNavbar && (<Navbar handleModalCadastrar={() => handleModalCadastrar()} />)}

            {/* Sessões */}
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
