import React from 'react';
import Styles from '../../styles/modal.module.css';
import BotaoFecharModal from '../svg/botaoFecharModal';

export default function ModalCadastrar(props) {
    function fecharModalClicandoNoBotao() {
        props.handleModal();
    }

    function fecharModalClicandoNoFundo(e) {
        // console.log(e.target);
        if (e.target.className.toString().includes('fundo')) {
            props.handleModal();
        }
    }

    return (
        <div className={Styles.fundo} onClick={(e) => fecharModalClicandoNoFundo(e)}>
            <div className={`${Styles.modal} animate__animated animate__fadeInUp animate__faster`}>
                <div className={Styles.divCabecalho}>
                    <BotaoFecharModal style={Styles} height='16px' width='16px' fecharModal={() => fecharModalClicandoNoBotao()} />

                    <div className={Styles.cabecalhoTitulo}>
                        <span>Entrar ou cadastrar-se</span>
                    </div>
                </div>

                <div className={Styles.divPrincipal}>
                    <h2 className={Styles.titulo}>Escolha um idioma e uma região</h2>

                    <div className={Styles.conteudo}>
                        <ul className={Styles.itens}>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
