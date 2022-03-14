import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgAnfitriao4 from '../../static/images/anfitrioes/clair.webp';
import ImgAssinatura4 from '../../static/images/anfitrioes/clairAssinatura.webp';
import ImgAnfitriao2 from '../../static/images/anfitrioes/darrel.webp';
import ImgAssinatura2 from '../../static/images/anfitrioes/darrelAssinatura.webp';
import ImgAnfitriao6 from '../../static/images/anfitrioes/marko.webp';
import ImgAssinatura6 from '../../static/images/anfitrioes/markoAssinatura.webp';
import ImgAnfitriao5 from '../../static/images/anfitrioes/mohammed.webp';
import ImgAssinatura5 from '../../static/images/anfitrioes/mohammedAssinatura.webp';
import ImgAnfitriao3 from '../../static/images/anfitrioes/nerina.webp';
import ImgAssinatura3 from '../../static/images/anfitrioes/nerinaAssinatura.webp';
import ImgAnfitriao1 from '../../static/images/anfitrioes/reka.webp';
import ImgAssinatura1 from '../../static/images/anfitrioes/rekaAssinatura.webp';
import Styles from '../../styles/host.sessao2.module.css';
import Slide from './outros/slide';

export default function SessaoDois(props) {
    return (
        <div className={Styles.sessaoDois} ref={props.referencia}>
            <div className={Styles.tituloPrincipal}>
                <span>Você pode hospedar</span>
                <span>onde quiser, quando quiser</span>

                <Swiper className={Styles.carousel} spaceBetween={50} slidesPerView={3}>
                    <SwiperSlide>
                        <Slide
                            style={Styles}
                            imgAnfitriao={ImgAnfitriao1}
                            imgAnfitriaoWidth={500}
                            imgAnfitriaoHeight={500}
                            descricao={'Compartilhar meu estúdio mudou minha vida, me presenteou com experiências inesquecíveis e me permitiu conhecer pessoas incríveis.'}
                            imgAssinatura={ImgAssinatura1}
                            imgAssinaturaWidth={59}
                            imgAssinaturaHeight={32}
                            info={'Anfitriã em Milão'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Slide
                            style={Styles}
                            imgAnfitriao={ImgAnfitriao2}
                            imgAnfitriaoWidth={500}
                            imgAnfitriaoHeight={500}
                            descricao={'Anunciar minha acomodação no Airbnb me permitiu traçar um caminho para a liberdade financeira.'}
                            imgAssinatura={ImgAssinatura2}
                            imgAssinaturaWidth={100}
                            imgAssinaturaHeight={32}
                            info={'Anfitriã em Atlanta'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Slide
                            style={Styles}
                            imgAnfitriao={ImgAnfitriao3}
                            imgAnfitriaoWidth={500}
                            imgAnfitriaoHeight={500}
                            descricao={'Conseguimos manter nossa cultura viva ao oferecer nossa experiência de produção de massas.'}
                            imgAssinatura={ImgAssinatura3}
                            imgAssinaturaWidth={90}
                            imgAssinaturaHeight={32}
                            info={'Anfitriã em Palombara Sabina'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Slide
                            style={Styles}
                            imgAnfitriao={ImgAnfitriao4}
                            imgAnfitriaoWidth={500}
                            imgAnfitriaoHeight={500}
                            descricao={'O Airbnb me possibilitou trabalhar de forma independente fazendo algo que amo — cuidar dos hóspedes em nossa casa.'}
                            imgAssinatura={ImgAssinatura4}
                            imgAssinaturaWidth={59}
                            imgAssinaturaHeight={32}
                            info={'Anfitriã em Chiang Mai'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Slide
                            style={Styles}
                            imgAnfitriao={ImgAnfitriao5}
                            imgAnfitriaoWidth={500}
                            imgAnfitriaoHeight={500}
                            descricao={'Hospedar em minha tenda beduína me permitiu conhecer pessoas do mundo todo.'}
                            imgAssinatura={ImgAssinatura5}
                            imgAssinaturaWidth={128}
                            imgAssinaturaHeight={32}
                            info={'Anfitriã em Wadi Rum'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Slide
                            style={Styles}
                            imgAnfitriao={ImgAnfitriao6}
                            imgAnfitriaoWidth={500}
                            imgAnfitriaoHeight={500}
                            descricao={'Adoro hospedar em minha casa ecológica e assim promover a conexão das pessoas com a natureza e entre si.'}
                            imgAssinatura={ImgAssinatura6}
                            imgAssinaturaWidth={128}
                            imgAssinaturaHeight={32}
                            info={'Anfitriã em Paraty'}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
