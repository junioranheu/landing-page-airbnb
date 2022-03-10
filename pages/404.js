import Link from 'next/link';
import React, { useEffect } from 'react';
import Styles from '../styles/x.module.css';

export default function Erro() {
    useEffect(() => {
        document.title = '404';
    }, [])

    return (
        <div className={Styles.principal}>
            <span>404 | Essa página não foi encontrada.</span>

            <span>
                <Link href='/'>
                    <a>
                        Volte aqui
                    </a>
                </Link>
            </span>
        </div>
    )
}
