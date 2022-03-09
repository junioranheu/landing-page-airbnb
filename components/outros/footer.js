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
        </footer>
    )
}
