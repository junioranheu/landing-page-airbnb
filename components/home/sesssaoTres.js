import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Styles from '../../styles/host.sessaoTres.module.css';
import ModalWrapper from '../outros/modalWrapper';

export default function SessaoTres() {
    const [tipoEspaco, setTipoEspaco] = useState(450);
    function handleChangeTipoEspaco(e) {
        setTipoEspaco(e.target.value);
    }

    const listaHospedes = ['1 hóspede', '2 hóspedes', '3 hóspedes', '4 hóspedes', '5 hóspedes', '6 hóspedes', '7 hóspedes'];
    const [qtdHospedes, setQtdHospedes] = useState(1);
    function handleChangeHospedes(e) {
        setQtdHospedes(e.target.value);
    }

    const [localizado, setLocalizado] = useState(1.2);
    function handleChangeLocalizado(e) {
        setLocalizado(e.target.value);
    }

    const [dinheiroTotal, setDinheiroTotal] = useState(0);
    useEffect(() => {
        // Cálculo para SIMULAR o que é feito no site oficial;
        const porHospede = 180; // Só para simular :P
        const porHospedeFinal = porHospede * qtdHospedes;
        let dinheiro = ((tipoEspaco * localizado) + porHospedeFinal);
        setDinheiroTotal(dinheiro);
    }, [tipoEspaco, qtdHospedes, localizado])

    return (
        <div className={Styles.sessaoTres}>
            <ModalWrapper isOpen={false}>
                <div>
                    <h1>COCHINO</h1>
                </div>
            </ModalWrapper>

            <div>
                <span className={Styles.titulo}>Qual o tipo do seu espaço?</span>

                <select className={Styles.select} onChange={(e) => handleChangeTipoEspaco(e)}>
                    <option value='450'>Lugar inteiro</option>
                    <option value='275'>Quarto inteiro</option>
                    <option value='150'>Quarto compartilhado</option>
                </select>
            </div>

            <div>
                <span className={Styles.titulo}>Quantas pessoas podem se hospedar?</span>

                <select className={Styles.select} onChange={(e) => handleChangeHospedes(e)}>
                    {listaHospedes.map((item, i) => (
                        <option value={(i + 1)} key={i}>{item}</option>
                    ))}
                </select>
            </div>

            <div>
                <span className={Styles.titulo}>Onde está localizado?</span>

                <select className={Styles.select} onChange={(e) => handleChangeLocalizado(e)}>
                    <option value='1.2'>Lorena</option>
                    <option value='1.4'>Guaratinguetá</option>
                    <option value='2'>São José dos Campos</option>
                    <option value='2.5'>São Paulo</option>
                </select>
            </div>

            <div>
                <span className={Styles.tituloInfo}>Ganhe até R${dinheiroTotal} por mês*</span>
                <Link href='/'><a className={Styles.info}>Como estimamos seu potencial de ganho</a></Link>
            </div>
        </div>
    )
}
