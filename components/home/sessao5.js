import React, { useRef, useState } from 'react';
import VideoDois from '../../static/videos/videoDois.webm';
import StylesGeral from '../../styles/host.geral.module.css';
import Styles from '../../styles/host.sessao5.module.css';
import BotaoPlay from '../svg/botaoPlay';

export default function SessaoCinco(props) {
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
                <video className={Styles.video} autoPlay loop muted playsinline ref={refVideo}
                    aria-label='Três anfitriões diferentes preparam seus lugares para a chegada dos hóspedes. A primeira anfitriã mostra um pão recém-saído do forno. O segundo anfitrião escreve um recado de boas-vindas para seu hóspede. A terceira anfitriã coloca uma tigela de limões sobre a mesa.'>
                    <source src={VideoDois} type='video/mp4' />
                </video>

                <div className={Styles.divPlay}>
                    <div>
                        <BotaoPlay isPlaying={isPlaying} handleReproduzirVideo={() => handleReproduzirVideo()} style={Styles} />
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
                        <input className={StylesGeral.botao} type='button' value='Vamos lá!' onClick={props.handleModalCadastrar} />
                    </div>
                </div>
            </div>
        </div>
    )
}
