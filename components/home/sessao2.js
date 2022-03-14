import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import ImgAnfitriao4 from '../../static/images/anfitrioes/clair.webp';
import ImgAnfitriao2 from '../../static/images/anfitrioes/darrel.webp';
import ImgAnfitriao6 from '../../static/images/anfitrioes/marko.webp';
import ImgAnfitriao5 from '../../static/images/anfitrioes/mohammed.webp';
import ImgAnfitriao3 from '../../static/images/anfitrioes/nerina.webp';
import ImgAnfitriao1 from '../../static/images/anfitrioes/reka.webp';
import Styles from '../../styles/host.sessao2.module.css';

export default function SessaoDois(props) {
    return (
        <div className={Styles.sessaoDois} ref={props.referencia}>
            <div className={Styles.tituloPrincipal}>
                <span>Você pode hospedar</span>
                <span>onde quiser, quando quiser</span>

                <Carousel>
                    <div>
                        <Image src={ImgAnfitriao1} alt='' width={600} height={600} />
                        <p>Legend 1</p>
                    </div>

                    <div>
                        <Image src={ImgAnfitriao2} alt='' width={600} height={600} />
                        <p className="legend">Legend 2</p>
                    </div>

                    <div>
                        <Image src={ImgAnfitriao3} alt='' width={600} height={600} />
                        <p className="legend">Legend 3</p>
                    </div>

                    <div>
                        <Image src={ImgAnfitriao4} alt='' width={600} height={600} />
                        <p>Legend 1</p>
                    </div>

                    <div>
                        <Image src={ImgAnfitriao5} alt='' width={600} height={600} />
                        <p className="legend">Legend 2</p>
                    </div>

                    <div>
                        <Image src={ImgAnfitriao6} alt='' width={600} height={600} />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
