import Link from 'next/link';
import Styles from '../../styles/host.sessaoTres.module.css';

export default function SessaoTres() {
    return (
        <div className={Styles.sessaoTres}>
            <div>
                <span className={Styles.titulo}>Qual o tipo do seu espaço?</span>

                <select className={Styles.select}
                // value={value}
                // onChange={(e) => {
                //     setValue(e.target.value);
                // }}           
                >
                    <option value='option-1'>Lugar inteiro</option>
                    <option value='option-2'>Quarto inteiro</option>
                    <option value='option-3'>Quarto compartilhado</option>
                </select>
            </div>

            <div>
                <span className={Styles.titulo}>Quantas pessoas podem se hospedar?</span>
                <span className={Styles.opcao}>4 hóspedes</span>
            </div>

            <div>
                <span className={Styles.titulo}>Onde está localizado?</span>
                <span className={Styles.opcao}>Guaratingueta</span>
            </div>

            <div>
                <span className={Styles.tituloInfo}>Ganhe até R$2.982 por mês*</span>
                <Link href='/'><a className={Styles.info}>Clique aqui para ser direcionado à página em construção</a></Link>
            </div>
        </div>
    )
}
