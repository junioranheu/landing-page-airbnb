import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import VideoUm from '../../static/videos/videoUm.webm';
import StylesGeral from '../../styles/host.geral.module.css';
import Styles from '../../styles/host.sessao1.module.css';
import BotaoPlay from '../svg/botaoPlay';
import Logo from '../svg/logo';
import Anfitriao from './outros/anfitriao';

export default function SessaoUm(props) {
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

    const [isMostrarChelsea, setIsMostrarChelsea] = useState(true);
    const [isMostrarSomaya, setIsMostrarSomaya] = useState(false);
    const [isMostrarMohamed, setIsMostrarMohamed] = useState(false);
    const [isMostrarMaria, setIsMostrarMaria] = useState(false);
    useEffect(() => {
        // Tempos para mudar o nome exibido;
        const chelsea = 0;
        const somaya = 1.9;
        const mohamed = 3.6;
        const maria = 5;
        const fimVideo = 7.5;
        let qtdLoopVideoAtual = 0;
        const qtdMaxLoopVideo = 5;

        const intervalo = setInterval(() => {
            const tempo = refVideo.current.currentTime;
            // console.log(tempo);

            // Definir o tempo das mudanças com base no tempo atual do vídeo;
            if (tempo >= chelsea && tempo < somaya) {
                setIsMostrarChelsea(true);
                setIsMostrarSomaya(false);
                setIsMostrarMohamed(false);
                setIsMostrarMaria(false);
            } else if (tempo >= somaya && tempo < mohamed) {
                setIsMostrarChelsea(false);
                setIsMostrarSomaya(true);
                setIsMostrarMohamed(false);
                setIsMostrarMaria(false);
            } else if (tempo >= chelsea && tempo < maria) {
                setIsMostrarChelsea(false);
                setIsMostrarSomaya(false);
                setIsMostrarMohamed(true);
                setIsMostrarMaria(false);
            } else if (tempo >= chelsea) {
                setIsMostrarChelsea(false);
                setIsMostrarSomaya(false);
                setIsMostrarMohamed(false);
                setIsMostrarMaria(true);
            }

            // Fim do vídeo;
            if (tempo >= fimVideo) {
                qtdLoopVideoAtual++;
                // console.log(`Loop ${qtdLoopVideoAtual} feito, faltam ${(qtdMaxLoopVideo - qtdLoopVideoAtual)}`);

                // Se o vídeo rodar duas vezes;
                if (qtdLoopVideoAtual === qtdMaxLoopVideo) {
                    refVideo.current.currentTime = 1; // Setar início do vídeo novamente;
                    refVideo.current.pause(); // Pausar vídeo;
                    setIsPlaying(false);
                    qtdLoopVideoAtual = 0;
                }
            }
        }, 100);

        return () => clearInterval(intervalo);
    }, [])

    function handleBotaoSessaoDois() {
        props.handleBotaoSessaoDois();
    }

    return (
        <div className={Styles.sessaoUm}>
            <div className={Styles.divEsquerda}>
                <Link href='/'>
                    <a className={StylesGeral.logo}>
                        <Logo height='36px' width='36px' fill='#fff' />
                    </a>
                </Link>

                <div>
                    <span className={Styles.tituloPrincipal}>
                        <span>Hospedar</span>
                        <span>é a essência</span>
                        <span>do Airbnb</span>
                    </span>

                    <div className={Styles.divBotao}>
                        <input className={StylesGeral.botao} type='button' value='Experimente hospedar' onClick={props.handleModalCadastrar} />
                    </div>
                </div>

                <div className={Styles.botaoNavegarBaixo} onClick={() => handleBotaoSessaoDois()}>
                    <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'
                        style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: '#fff', strokeWidth: '4', overflow: 'visible' }}
                        aria-hidden='true' role='presentation' focusable='false'>

                        <path d='m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932'></path>
                    </svg>
                </div>
            </div>

            <div className={Styles.divDireita}>
                <video className={Styles.video} autoPlay loop muted playsinline='true' disablePictureInPicture='true' ref={refVideo}
                    aria-label='Chelsea, anfitriã na Filadélfia, sorri ao abrir a porta. Soraya, anfitriã em Mumbai, sorri ao abrir a porta da frente com outra pessoa ao seu lado. Mohamed, anfitrião em Joanesburgo, sorri ao abrir a porta. Maria, anfitriã na Cidade do México, acena com a cabeça e sorri ao carregar uma planta.'>
                    <source src={VideoUm} type='video/mp4' />
                </video>

                <div className={Styles.nomesAnfitrioes}>
                    <div>
                        <BotaoPlay isPlaying={isPlaying} handleReproduzirVideo={() => handleReproduzirVideo()} style={Styles} />
                    </div>

                    {isMostrarChelsea && (
                        <Anfitriao style={Styles} span={Styles.spanAnfitriaoChelsea} nome={'Chelsea'} descricao={'Anfitriã na Filadélfia'} />
                    )}

                    {isMostrarSomaya && (
                        <Anfitriao style={Styles} span={Styles.spanAnfitriaoSomaya} nome={'Somaya'} descricao={'Anfitriã na Mumbai'} />
                    )}

                    {isMostrarMohamed && (
                        <Anfitriao style={Styles} span={Styles.spanAnfitriaoMohamed} nome={'Mohamed'} descricao={'Anfitrião em Joanesburgo'} />
                    )}

                    {isMostrarMaria && (
                        <Anfitriao style={Styles} span={Styles.spanAnfitriaoMaria} nome={'María'} descricao={'Anfitrião na Cidade do México'} />
                    )}
                </div>
            </div>
        </div>
    )
}
