import Link from 'next/link';
import React from 'react';
import Styles from '../../styles/modal.module.css';
import BotaoFecharModal from '../svg/botaoFecharModal';

export default function ModalInfoPotencialGanho(props) {
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
        <div className={Styles.fundo} onMouseDown={(e) => fecharModalClicandoNoFundo(e)}>
            <div className={`${Styles.modal} animate__animated animate__fadeInUp animate__faster`}>
                <div className={Styles.divCabecalho}>
                    <BotaoFecharModal style={Styles} height='16px' width='16px' fecharModal={() => fecharModalClicandoNoBotao()} />

                    {/* <div className={Styles.cabecalhoTitulo}>
                        <span>xxx</span>
                    </div> */}
                </div>
                
                <div className={Styles.divPrincipal}>
                    <h2 className={Styles.titulo}>Como estimamos seu potencial de ganho</h2>

                    <div className={Styles.conteudo}>
                        <p>Fazemos algumas suposições e cálculos simples para estimar seus ganhos:</p>
                        <ul>
                            <li>Se você tem um espaço inteiro, supomos que pode receber quatro hóspedes. Se você anuncia um quarto inteiro, contamos como dois hóspedes e, no caso de um quarto compartilhado, apenas um hóspede. Você pode alterar essas opções no menu suspenso a qualquer momento.</li>
                            <br />
                            <li>Tomamos o preço médio por noite (sem despesas, taxas e impostos) com base nos dados de reserva na região nos últimos 12 meses.</li>
                            <br />
                            <li>Depois, multiplicamos esse preço pelo número total de noites ocupadas para chegar à estimativa de ganhos mensais. Para obter uma estimativa do número de noites que você pode hospedar, analisamos a frequência com que outras pessoas na sua região estão hospedando.</li>
                        </ul>

                        Lembre-se de que isso são apenas estimativas. O valor que você realmente ganha depende de vários outros fatores, como disponibilidade, preço, taxas de aceitação e cancelamento, restrições legais e a demanda na sua região.
                        <br />
                        Além disso, sua capacidade de hospedar pode depender das leis locais da sua região.
                        &nbsp;
                        <Link href='/'><a className={Styles.link} target='_blank'>Saiba mais</a></Link>.
                    </div>
                </div>
            </div>
        </div>
    )
}
