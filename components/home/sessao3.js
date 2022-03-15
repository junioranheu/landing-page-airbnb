import React, { Fragment, useEffect, useState } from 'react';
import Styles from '../../styles/host.sessao3.module.css';
import Cidades from '../../utils/outros/cidadesValeParaiba';
import ModalInfoPotencialGanho from '../modal/modalInfoPotencialGanho';
import ModalWrapper from '../outros/modalWrapper';

export default function SessaoTres() {
    const [tipoEspaco, setTipoEspaco] = useState(450);
    function handleChangeTipoEspaco(e) {
        setTipoEspaco(e.target.value);
    }

    const listaHospedes = ['1 hóspede', '2 hóspedes', '3 hóspedes', '4 hóspedes', '5 hóspedes', '6 hóspedes', '7 hóspedes', 'Mais que 7'];
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

    const [modalInfoPotencialGanhoOpen, setModalInfoPotencialGanhoOpen] = useState(false);
    function handleModalInfoPotencialGanho() {
        setModalInfoPotencialGanhoOpen(!modalInfoPotencialGanhoOpen);
    }

    return (
        <Fragment>
            {/* Modal */}
            <ModalWrapper isOpen={modalInfoPotencialGanhoOpen}>
                <ModalInfoPotencialGanho handleModal={() => handleModalInfoPotencialGanho()} />
            </ModalWrapper>

            {/* Conteúdo */}
            <div className={Styles.sessaoTres}>
                <div>
                    <span className={Styles.titulo}>Qual o tipo do seu espaço?</span>

                    <select className={Styles.select} onChange={(e) => handleChangeTipoEspaco(e)}>
                        <option value='450'>Lugar inteiro</option>
                        <option value='275'>Quarto inteiro</option>
                        <option value='150'>Quarto compartilhado</option>
                    </select>
                </div>

                <div>
                    <span className={Styles.titulo}>Capacidade máxima?</span>

                    <select className={Styles.select} onChange={(e) => handleChangeHospedes(e)}>
                        {listaHospedes.map((item, i) => (
                            <option value={(i + 1)} key={i}>{item}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <span className={Styles.titulo}>Onde está localizado?</span>

                    <div className={Styles.selectWrapper}>
                        <select className={Styles.select} onChange={(e) => handleChangeLocalizado(e)}>
                            {Cidades().map((item, i) => (
                                <option key={item.id} value={item.multiplicador}>{item.nome}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <span className={Styles.tituloInfo}>Ganhe até R${dinheiroTotal} por mês*</span>
                    <span className={Styles.info} onClick={() => handleModalInfoPotencialGanho()}>Como estimamos seu potencial de ganho</span>
                </div>
            </div>
        </Fragment>
    )
}
