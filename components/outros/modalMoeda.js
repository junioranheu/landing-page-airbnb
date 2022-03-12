import React from 'react';
import Styles from '../../styles/modal.module.css';
import Moedas from '../../utils/outros/moedas';
import BotaoFecharModal from '../svg/botaoFecharModal';

export default function ModalMoeda(props) {
    function fecharModalClicandoNoBotao() {
        props.handleModal();
    }

    function fecharModalClicandoNoFundo(e) {
        // console.log(e.target);
        if (e.target.className.toString().includes('fundo')) {
            props.handleModal();
        }
    }

    function handleClick(item) {
        // console.log(item);
        props.handleSetIdioma(item);
    }

    return (
        <div className={Styles.fundo} onClick={(e) => fecharModalClicandoNoFundo(e)}>
            <div className={`${Styles.modal} ${Styles.modalGrande} animate__animated animate__fadeInUp animate__faster`}>
                <BotaoFecharModal style={Styles} height='16px' width='16px' fecharModal={() => fecharModalClicandoNoBotao()} />

                <div className={Styles.divPrincipal}>
                    <h2 className={Styles.titulo}>Escolha um idioma e uma região</h2>

                    <div className={Styles.conteudo}>
                        <ul className={Styles.itens}>
                            {Moedas().map((item, i) => (
                                <li className={Styles.itemLi} key={item.id} onClick={() => handleClick(item)}>
                                    <a className={`${Styles.itemA} ${(props.idiomaSelecionado.id === item.id ? Styles.itemASelecionado : '')}`}>
                                        <div>{item.moeda}</div>
                                        <div>{item.sigla} - {item.cifrao}</div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
