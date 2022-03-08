import React from 'react';
import Styles from '../../styles/host.module.css';

export default function Homes() {
    return (
        <React.Fragment>
            <div className={Styles.sessaoUm}>
                <div className={Styles.divEsquerda}>
                    <div>
                        <span className={Styles.tituloPrincipal}>
                            <span>Hospedar</span>
                            <span>é a essência</span>
                            <span>do Airbnb</span>           
                        </span>

                        <div className={Styles.divBotao}>
                            <input className={Styles.botao} type='button' value='Experimente hospedar' />
                        </div>
                    </div>
                </div>

                <div className={Styles.divDireita}>
                    Dois
                </div>
            </div>

            <div className={Styles.sessaoDois}>
                oi
            </div>
        </React.Fragment>
    )
}
