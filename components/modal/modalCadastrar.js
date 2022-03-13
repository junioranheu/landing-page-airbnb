import Link from 'next/link';
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
                    <span className={StylesCadastrar.infoPequena}>
                        Ligaremos ou enviaremos uma mensagem para confirmar seu número. Podem ser aplicadas tarifas padrão de dados e mensagens.&nbsp;
                        <Link href='/'><a className='underline' target='_blank'>Política de Privacidade</a></Link>
                    </span>

                    <div className={StylesCadastrar.divBotao}>
                        <input className={StylesGeral.botao} type='button' value='Continuar' />
                    </div>

                    <div className={StylesCadastrar.divisorWrapper}>
                        <div className={StylesCadastrar.divisor}>ou</div>
                    </div>
                </div>
            </div>
        </div>
    )
}