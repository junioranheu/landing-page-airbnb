import Link from 'next/link';
import React, { useState } from 'react';
import StylesGeral from '../../styles/host.geral.module.css';
import StylesCadastrar from '../../styles/modal.cadastrar.module.css';
import Styles from '../../styles/modal.module.css';
import Idiomas from '../../utils/outros/idiomas';
import BotaoFecharModal from '../svg/botaoFecharModal';
import IconeErro from '../svg/erro';

export default function ModalCadastrar(props) {
    function fecharModalClicandoNoBotao() {
        document.documentElement.style.setProperty('--overflow-y', 'auto');
        props.handleModal();
    }

    function fecharModalClicandoNoFundo(e) {
        // console.log(e.target);
        if (e.target.className.toString().includes('fundo')) {
            document.documentElement.style.setProperty('--overflow-y', 'auto');
            props.handleModal();
        }
    }

    const [formData, setFormData] = useState();
    function handleChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const [divInputsErro, setDivInputsErro] = useState(false);
    function handleContinuar() {
        // console.log(formData);
        setDivInputsErro(false);

        if (!formData) {
            console.log('preencha os campos');
            setDivInputsErro(true);
            return false;
        }

        if (!formData.codigoTelefone) {
            console.log('codigoTelone');
            setDivInputsErro(true);
            return false;
        }

        if (!formData.numeroTelefone) {
            console.log('numeroTelefone');
            setDivInputsErro(true);
            return false;
        }
    }

    return (
        <div className={Styles.fundo} onClick={(e) => fecharModalClicandoNoFundo(e)}>
            <div className={`${Styles.modal} ${Styles.modalPequeno} animate__animated animate__fadeInUp animate__faster`}>
                <div className={Styles.divCabecalho}>
                    <BotaoFecharModal style={Styles} height='16px' width='16px' fecharModal={() => fecharModalClicandoNoBotao()} />

                    <div className={Styles.cabecalhoTitulo}>
                        <span>Entrar ou cadastrar-se</span>
                    </div>
                </div>

                <div className={StylesCadastrar.divPrincipal}>
                    <span className={StylesCadastrar.titulo}>Bem-vindo ao Airbnb</span>

                    <div className={`${StylesCadastrar.divInputs} ${(divInputsErro ? StylesCadastrar.divInputsErro : '')} `}>
                        <select className={StylesCadastrar.input} defaultValue={0} name='codigoTelefone' onChange={handleChange} >
                            <option value={0} disabled>País/Região</option>

                            {Idiomas('regiao').map((item, i) => (
                                <option key={item.id} value={item.id}>{item.regiao} ({item.codigoTelefonico})</option>
                            ))}
                        </select>

                        <div className={`${StylesCadastrar.divisaoInput} ${(divInputsErro ? StylesCadastrar.divisaoInputErro : '')}`}></div>
                        <input className={StylesCadastrar.input} placeholder='Número de telefone' name='numeroTelefone' onChange={handleChange} />
                    </div>

                    <div class="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
                        <div class="xxxxxxxxxxxxxxxxxxxxxxxxxxx">
                            <span>
                                <IconeErro height='16px' width='16px' />
                            </span>

                            O número de telefone é obrigatório.
                        </div>
                    </div>

                    <span className={StylesCadastrar.infoPequena}>
                        Ligaremos ou enviaremos uma mensagem para confirmar seu número. Podem ser aplicadas tarifas padrão de dados e mensagens.&nbsp;
                        <Link href='/'><a className='underline' target='_blank'>Política de Privacidade</a></Link>
                    </span>

                    <div className={StylesCadastrar.divBotao}>
                        <input className={StylesGeral.botao} type='button' value='Continuar' onClick={() => handleContinuar()} />
                    </div>

                    <div className={StylesCadastrar.divisorWrapper}>
                        <div className={StylesCadastrar.divisor}>ou</div>
                    </div>

                    <div>
                        <div className={StylesCadastrar.divBotaoMidiasSociais}>
                            <input className={`${StylesCadastrar.botao} ${StylesCadastrar.iconeFacebook}`} type='button' value='Continuar com Facebook' />
                        </div>

                        <div className={StylesCadastrar.divBotaoMidiasSociais}>
                            <input className={`${StylesCadastrar.botao} ${StylesCadastrar.iconeGoogle}`} type='button' value='Continuar com Google' />
                        </div>

                        <div className={StylesCadastrar.divBotaoMidiasSociais}>
                            <input className={`${StylesCadastrar.botao} ${StylesCadastrar.iconeApple}`} type='button' value='Continuar com Apple' />
                        </div>

                        <div className={StylesCadastrar.divBotaoMidiasSociais}>
                            <input className={`${StylesCadastrar.botao} ${StylesCadastrar.iconeEmail}`} type='button' value='Continuar com e-mail' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
