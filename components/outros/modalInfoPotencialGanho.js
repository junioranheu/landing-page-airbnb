import Link from 'next/link';
import React from 'react';
import Styles from '../../styles/modal.module.css';

export default function ModalInfoPotencialGanho(props) {
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
            <div className={Styles.modal}>
                <button aria-label='Fechar' type='button' className={Styles.botaoFechar} title='Fechar' onClick={() => fecharModalClicandoNoBotao()}>
                    <span className={Styles.spanBotaoFechar}>
                        <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='presentation' focusable='false'
                            style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '3', overflow: 'visible' }}>
                            <path d='m6 6 20 20'></path>
                            <path d='m26 6-20 20'></path>
                        </svg>
                    </span>
                </button>

                <div>
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
