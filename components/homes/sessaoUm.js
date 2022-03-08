import React, { useEffect, useRef, useState } from 'react';
import VideoUm from '../../static/videos/videoUm.webm';
import StylesGeral from '../../styles/host.geral.module.css';
import Styles from '../../styles/host.sessaoUm.module.css';
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
        const qtdMaxLoopVideo = 3;

        const intervalo = setInterval(() => {
            let tempo = refVideo.current.currentTime;
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
                // console.log('Completou +1 loop: ' + qtdLoopVideoAtual);

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
                <span className={StylesGeral.logo}>
                    <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'
                        style={{ display: 'block', height: '36px', width: '36px', fill: '#fff' }}
                        aria-label='Página inicial do Airbnb' role='img' focusable='false'>
                        <path d='M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z'></path>
                    </svg>
                </span>

                <div>
                    <span className={Styles.tituloPrincipal}>
                        <span>Hospedar</span>
                        <span>é a essência</span>
                        <span>do Airbnb</span>
                    </span>

                    <div className={Styles.divBotao}>
                        <input className={StylesGeral.botao} type='button' value='Experimente hospedar' />
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
                <video className={Styles.video} autoPlay loop muted ref={refVideo}
                    aria-label='Chelsea, anfitriã na Filadélfia, sorri ao abrir a porta. Soraya, anfitriã em Mumbai, sorri ao abrir a porta da frente com outra pessoa ao seu lado. Mohamed, anfitrião em Joanesburgo, sorri ao abrir a porta. Maria, anfitriã na Cidade do México, acena com a cabeça e sorri ao carregar uma planta.'>
                    <source src={VideoUm} type='video/mp4' />
                </video>

                <div className={Styles.nomesAnfitrioes}>
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
