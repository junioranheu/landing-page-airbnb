import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgAnfitriao4 from '../../static/images/anfitrioes/clair.webp';
import ImgAnfitriao2 from '../../static/images/anfitrioes/darrel.webp';
import ImgAnfitriao6 from '../../static/images/anfitrioes/marko.webp';
import ImgAnfitriao5 from '../../static/images/anfitrioes/mohammed.webp';
import ImgAnfitriao3 from '../../static/images/anfitrioes/nerina.webp';
import ImgAnfitriao1 from '../../static/images/anfitrioes/reka.webp';
import ImgAssinatura1 from '../../static/images/anfitrioes/rekaAssinatura.webp';
import Styles from '../../styles/host.sessao2.module.css';

export default function SessaoDois(props) {
    return (
        <div className={Styles.sessaoDois} ref={props.referencia}>
            <div className={Styles.tituloPrincipal}>
                <span>Você pode hospedar</span>
                <span>onde quiser, quando quiser</span>

                <Swiper className={Styles.carousel}
                    spaceBetween={50}
                    slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Image src={ImgAnfitriao1} alt='' width={500} height={500} className={Styles.imgAnfitriao} />

                        <div className={Styles.divDescricao}>
                            <span className={Styles.descricao}>Compartilhar meu estúdio mudou minha vida, me presenteou com experiências inesquecíveis e me permitiu conhecer pessoas incríveis.</span>
                            <Image src={ImgAssinatura1} alt='' width={110} height={32} />
                            <span className={Styles.info}>Anfitriã em Milão</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={ImgAnfitriao2} alt='' width={500} height={500} className={Styles.imgAnfitriao} />

                        <div className={Styles.divDescricao}>
                            <span className={Styles.descricao}>Anunciar minha acomodação no Airbnb me permitiu traçar um caminho para a liberdade financeira.</span>
                            <span className={Styles.info}>Darrel</span>
                            <span className={Styles.info}>Anfitriã em Atlanta</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={ImgAnfitriao3} alt='' width={500} height={500} className={Styles.imgAnfitriao} />

                        <div className={Styles.divDescricao}>
                            <span className={Styles.descricao}>Conseguimos manter nossa cultura viva ao oferecer nossa experiência de produção de massas.</span>
                            <span className={Styles.info}>Nerina</span>
                            <span className={Styles.info}>Anfitriã em Palombara Sabina</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={ImgAnfitriao4} alt='' width={500} height={500} className={Styles.imgAnfitriao} />

                        <div className={Styles.divDescricao}>
                            <span className={Styles.descricao}>O Airbnb me possibilitou trabalhar de forma independente fazendo algo que amo — cuidar dos hóspedes em nossa casa.</span>
                            <span className={Styles.info}>Clair</span>
                            <span className={Styles.info}>Anfitriã em Chiang Mai</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={ImgAnfitriao5} alt='' width={500} height={500} className={Styles.imgAnfitriao} />

                        <div className={Styles.divDescricao}>
                            <span className={Styles.descricao}>Hospedar em minha tenda beduína me permitiu conhecer pessoas do mundo todo.</span>
                            <span className={Styles.info}>Mohammed</span>
                            <span className={Styles.info}>Anfitriã em Wadi Rum</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={ImgAnfitriao6} alt='' width={500} height={500} className={Styles.imgAnfitriao} />

                        <div className={Styles.divDescricao}>
                            <span className={Styles.descricao}>Adoro hospedar em minha casa ecológica e assim promover a conexão das pessoas com a natureza e entre si.</span>
                            <span className={Styles.info}>Marko</span>
                            <span className={Styles.info}>Anfitriã em Paraty</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}