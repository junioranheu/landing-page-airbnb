import Link from 'next/link';
import Styles from '../../styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={Styles.footer}>
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

            <hr />

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
                        Privacidade
                    </span>

                    <span>
                        ·
                    </span>

                    <span>
                        Termos
                    </span>

                    <span>
                        ·
                    </span>

                    <span>
                        Mapa do site
                    </span>

                    <span>
                        ·
                    </span>

                    <span>
                        Informações da empresa
                    </span>
                </div>

                {/* Direita */}
                <div className={Styles.direita}>
                    <div className={Styles.config}>
                        <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='presentation' focusable='false'
                            style={{ height: '16px', width: '16px', fill: 'currentcolor' }}>
                            <path d='m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z'></path>
                        </svg>

                        <span>
                            Português (BR)
                        </span>

                        <span>
                            R$ BRL
                        </span>
                    </div>

                    <div className={Styles.icones}>
                        <span>
                            <svg viewBox='0 0 32 32' role='img' aria-hidden='false' aria-label='Acessar Facebook' focusable='false'
                                style={{ height: '18px', width: '18px', fill: 'currentcolor' }}>
                                <path d='m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78' fill-rule='evenodd'></path>
                            </svg>
                        </span>

                        <span>
                            pipa poposa
                        </span>

                        <span>
                            pipa poposa
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
