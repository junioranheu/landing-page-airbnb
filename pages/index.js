import Link from 'next/link';
import React, { useEffect } from 'react';
import Styles from '../styles/x.module.css';

export default function Index() {
    useEffect(() => {
        document.title = 'Airbnb - Em React.js, Next.js';
    }, [])

    return (
        <div className={Styles.principal}>
            <span>Projeto em desenvolvimento</span>

            <span>
                <Link href='/host/home'>
                    <a>
                        Clique aqui para ser direcionado à página em construção
                    </a>
                </Link>
            </span>
        </div>
    )
}
