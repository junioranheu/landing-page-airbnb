import Styles from '../../styles/host.sessaoQuatro.module.css';

export default function SessaoQuatro() {
    return (
        <div className={Styles.sessaoQuatro}>
            <div className={Styles.divPrincipal}>
                <div className={Styles.cardUm}>
                    <span>
                        Dúvidas sobre como se tornar um anfitrião?
                    </span>

                    <span>
                        Pergunte a um Superhost.
                    </span>

                    <div className={Styles.divBotao}>
                        <input className={Styles.botao} type='button' value='Saiba mais' />
                    </div>
                </div>
            </div>

            <div className={Styles.divPrincipal}>
                <div className={Styles.cardDois}>
                    <span>
                        <span className={Styles.aircoverUm}>air</span>      
                        <span className={Styles.aircoverDois}>cover</span>
                    </span>

                    <span>
                        Proteção ampla e gratuita para
                    </span>

                    <span>
                        anfitriões. Somente no Airbnb.
                    </span>

                    <div className={Styles.divBotao}>
                        <input className={Styles.botao} type='button' value='Conheça o AirCover' />
                    </div>
                </div>
            </div>
        </div>
    )
}
