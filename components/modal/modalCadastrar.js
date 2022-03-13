import React from 'react';
import StylesGeral from '../../styles/host.geral.module.css';
import StylesCadastrar from '../../styles/modal.cadastrar.module.css';
import Styles from '../../styles/modal.module.css';
import BotaoFecharModal from '../svg/botaoFecharModal';

export default function ModalCadastrar(props) {
    function fecharModalClicandoNoBotao() {
        document.documentElement.style.setProperty('--overflow-y', 'auto');
        props.handleModal();
    }

    function fecharModalClicandoNoFundo(e) {
        // console.log(e.target);
        if (e.target.className.toString().includes('fundo')) {
            document.documentElement.style.setProperty('--overflow-y', 'auto');
            props.handleModal();
        }
    }

    return (
        <div className={Styles.fundo} onClick={(e) => fecharModalClicandoNoFundo(e)}>
            <div className={`${Styles.modal} ${Styles.modalPequeno} animate__animated animate__fadeInUp animate__faster`}>
                <div className={Styles.divCabecalho}>
                    <BotaoFecharModal style={Styles} height='16px' width='16px' fecharModal={() => fecharModalClicandoNoBotao()} />

                    <div className={Styles.cabecalhoTitulo}>
                        <span>Entrar ou cadastrar-se</span>
                    </div>
                </div>

                <div className={StylesCadastrar.divPrincipal}>
                    <span className={StylesCadastrar.titulo}>Bem-vindo ao Airbnb</span>
                    <input />
                    <input />
                    <input className={StylesGeral.botao} type='button' value='Continuar' />

                    <div className={StylesCadastrar.divisorWrapper}>
                        <div className={StylesCadastrar.divisor}>ou</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
