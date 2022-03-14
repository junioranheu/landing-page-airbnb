import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ImgSuperHost1 from '../../../static/images/superhosts/superhost1.webp';
import ImgSuperHost2 from '../../../static/images/superhosts/superhost2.webp';
import ImgSuperHost3 from '../../../static/images/superhosts/superhost3.webp';
import StylesGeral from '../../../styles/host.geral.module.css';
import Styles from '../../../styles/host.navbar.module.css';
import Logo from '../../svg/logo';

export default function Navbar(props) {
    return (
        <nav role='navigation' aria-hidden='false' className={`${Styles.navbar} animate__animated animate__fadeIn animate__faster`}>
            <div className={Styles.divEsquerda}>
                <Link href='/'>
                    <a className={Styles.logoNavbar}>
                        <Logo height='36px' width='36px' fill='#000' />
                    </a>
                </Link>
            </div>

            <div className={Styles.divDireita}>
                <div>
                    <Link href='/'>
                        <a className={Styles.aSuperHost}>
                            <Image className={Styles.imgSuperHost} src={ImgSuperHost1} alt='' width={30} height={30} />
                            <Image className={Styles.imgSuperHost} src={ImgSuperHost2} alt='' width={30} height={30} />
                            <Image className={Styles.imgSuperHost} src={ImgSuperHost3} alt='' width={30} height={30} />

                            <span className={Styles.spanSuperHost}>
                                Pergunte a um Superhost
                            </span>
                        </a>
                    </Link>
                </div>

                <div>
                    <input className={StylesGeral.botao} type='button' value='Experimente hospedar' onClick={props.handleModalCadastrar} />
                </div>
            </div >
        </nav>
    )
}
