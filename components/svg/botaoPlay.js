import React, { Fragment } from 'react';

export default function BotaoPlay(props) {
    function handleReproduzirVideo() {
        props.handleReproduzirVideo();
    }

    return (
        <Fragment>
            {props.isPlaying ? (
                <button onClick={() => handleReproduzirVideo()}
                    aria-label='Pausar o vídeo' type='button' className={props.style.botaoReproduzirVideo}>
                    <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='presentation' focusable='false'>
                        <path d='M13 1v14H9V1zM7 1v14H3V1z'></path>
                    </svg>
                </button>
            ) : (
                <button onClick={() => handleReproduzirVideo()}
                    aria-label='Reproduzir o vídeo' type='button' className={props.style.botaoReproduzirVideo}>
                    <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='presentation' focusable='false'>
                        <path d='M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z'></path>
                    </svg>
                </button>
            )}
        </Fragment>
    )
}
