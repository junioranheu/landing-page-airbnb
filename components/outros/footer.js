import Link from 'next/link';
import Styles from '../../styles/footer.module.css';
import Facebook from '../svg/facebook';
import Instagram from '../svg/instagram';
import Terra from '../svg/terra';
import Twitter from '../svg/twitter';

export default function Footer() {
    return (     
        <footer className={Styles.footer}>
            {/* Principal */}
            <div className={Styles.principal}>
                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Atendimento</span>

                    <Link href='/'><a>Central de Ajuda</a></Link>
                    <Link href='/'><a>Informações de segurança</a></Link>
                    <Link href='/'><a>Opções de cancelamento</a></Link>
                    <Link href='/'><a>Nossa resposta à pandemia de COVID-19</a></Link>
                    <Link href='/'><a>Apoie pessoas com deficiência</a></Link>
                    <Link href='/'><a>Denuncie um problema do bairro</a></Link>
                </div>

                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Comunidade</span>

                    <Link href='/'><a>Airbnb.org: ajuda em desastres</a></Link>
                    <Link href='/'><a>Apoie refugiados afegãos</a></Link>
                    <Link href='/'><a>Combate à discriminação</a></Link>
                </div>

                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Hospedagem</span>

                    <Link href='/'><a>Experimente hospedar</a></Link>
                    <Link href='/'><a>AirCover: proteção ao hospedar</a></Link>
                    <Link href='/'><a>Explore recursos para hospedar</a></Link>
                    <Link href='/'><a>Visite o fórum da comunidade</a></Link>
                    <Link href='/'><a>Hospede de forma responsável</a></Link>
                </div>

                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Sobre</span>

                    <Link href='/'><a>Newsroom</a></Link>
                    <Link href='/'><a>Descubra os novos recursos</a></Link>
                    <Link href='/'><a>Carta dos nossos fundadores</a></Link>
                    <Link href='/'><a>Carreiras</a></Link>
                    <Link href='/'><a>Investidores</a></Link>
                    <Link href='/'><a>Airbnb Luxe</a></Link>
                </div>
            </div>

            {/* Secundária */}
            <div className={Styles.secundaria}>
                {/* Esquerda */}
                <div>
                    <span>
                        © 2022 Airbnb, Inc
                    </span>

                    <span>
                        ·
                    </span>

                    <span>
                        <Link href='/'><a>Privacidade</a></Link>
                    </span>

                    <span>
                        ·
                    </span>

                    <span>
                        <Link href='/'><a>Termos</a></Link>
                    </span>

                    <span>
                        ·
                    </span>

                    <span>
                        <Link href='/'><a>Mapa do site</a></Link>
                    </span>

                    <span>
                        ·
                    </span>

                    <span>
                        <Link href='/'><a>Informações da empresa</a></Link>
                    </span>
                </div>

                {/* Direita */}
                <div className={Styles.direita}>
                    <div className={Styles.config}>
                        <Terra url={'/'} height='16px' width='16px' ariaLabel='' />

                        <span>
                            Português (BR)
                        </span>

                        <span>
                            R$ BRL
                        </span>
                    </div>

                    <div className={Styles.icones}>
                        <span>
                            <Facebook url={'/'} height='18px' width='18px' ariaLabel='Acessar Facebook' />
                        </span>

                        <span>
                            <Twitter url={'/'} height='18px' width='18px' ariaLabel='Acessar Twitter' />
                        </span>

                        <span>
                            <Instagram url={'/'} height='18px' width='18px' ariaLabel='Acessar Instagram' />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
