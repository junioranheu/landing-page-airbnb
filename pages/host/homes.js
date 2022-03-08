import React from 'react';
import VideoUm from '../../static/videos/videoUm.mp4';
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
                    <video class={Styles.video} autoPlay loop
                        aria-label='Chelsea, anfitriã na Filadélfia, sorri ao abrir a porta. Soraya, anfitriã em Mumbai, sorri ao abrir a porta da frente com outra pessoa ao seu lado. Mohamed, anfitrião em Joanesburgo, sorri ao abrir a porta. Maria, anfitriã na Cidade do México, acena com a cabeça e sorri ao carregar uma planta.'>
                        <source src={VideoUm} type='video/mp4' />
                    </video>
                </div>
            </div>

            <div className={Styles.sessaoDois}>
                oi
            </div>
        </React.Fragment >
    )
}
