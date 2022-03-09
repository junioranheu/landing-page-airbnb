import Styles from '../../styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.principal}>
                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Atendimento</span>

                    <span>Central de Ajuda</span>
                    <span>Informações de segurança</span>
                    <span>Opções de cancelamento</span>
                    <span>Nossa resposta à pandemia de COVID-19</span>
                    <span>Apoie pessoas com deficiência</span>
                    <span>Denuncie um problema do bairro</span>
                </div>

                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Comunidade</span>

                    <span>Airbnb.org: ajuda em desastres</span>
                    <span>Apoie refugiados afegãos</span>
                    <span>Combate à discriminação</span>
                </div>

                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Hospedagem</span>

                    <span>Experimente hospedar</span>
                    <span>AirCover: proteção ao hospedar</span>
                    <span>Explore recursos para hospedar</span>
                    <span>Visite o fórum da comunidade</span>
                    <span>Hospede de forma responsável</span>
                </div>

                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Sobre</span>

                    <span>Newsroom</span>
                    <span>Descubra os novos recursos</span>
                    <span>Carta dos nossos fundadores</span>
                    <span>Carreiras</span>
                    <span>Investidores</span>
                    <span>Airbnb Luxe</span>
                </div>
            </div>
        </footer>
    )
}
