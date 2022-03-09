import React, { useRef, useState } from 'react';
import VideoDois from '../../static/videos/videoDois.webm';
import StylesGeral from '../../styles/host.geral.module.css';
import Styles from '../../styles/host.sessaoCinco.module.css';
 
export default function SessaoCinco() {
    const [isPlaying, setIsPlaying] = useState(true);
    const refVideo = useRef(null);
    function handleReproduzirVideo() {
        if (isPlaying) {
            refVideo.current.pause();
            setIsPlaying(false);
        } else {
            refVideo.current.play();
            setIsPlaying(true);
        }
    }

    return (
        <div className={Styles.sessaoCinco}>
            <div className={Styles.divEsquerda}>
                <video className={Styles.video} autoPlay loop muted ref={refVideo}
                    aria-label='Três anfitriões diferentes preparam seus lugares para a chegada dos hóspedes. A primeira anfitriã mostra um pão recém-saído do forno. O segundo anfitrião escreve um recado de boas-vindas para seu hóspede. A terceira anfitriã coloca uma tigela de limões sobre a mesa.'>
                    <source src={VideoDois} type='video/mp4' />
                </video>

                <div className={Styles.divPlay}>
                    <div>
                        {isPlaying ? (
                            <button onClick={() => handleReproduzirVideo()}
                                aria-label='Pausar o vídeo de introdução do anfitrião' type='button' className={Styles.botaoReproduzirVideo}>
                                <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='presentation' focusable='false'>
                                    <path d='M13 1v14H9V1zM7 1v14H3V1z'></path>
                                </svg>
                            </button>
                        ) : (
                            <button onClick={() => handleReproduzirVideo()}
                                aria-label='Reproduzir' type='button' className={Styles.botaoReproduzirVideo}>
                                <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='presentation' focusable='false'>
                                    <path d='M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z'></path>
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className={Styles.divDireita}>
                <div>
                    <span className={Styles.tituloPrincipal}>
                        <span>Experimente ser anfitrião</span>
                        <span>no Airbnb</span>

                        <span className={Styles.tituloPequeno}>
                            <span>Faça parte da comunidade. Ajudaremos você</span>
                            <span>a cada etapa.</span>
                        </span>
                    </span>

                    <div className={Styles.divBotao}>
                        <input className={StylesGeral.botao} type='button' value='Vamos lá!' />
                    </div>
                </div>
            </div>
        </div>
    )
}
