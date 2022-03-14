import Image from 'next/image';
import { Fragment } from 'react';

export default function Slide(props) {
    return (
        <Fragment>
            <Image src={props.imgAnfitriao} alt='' width={props.imgAnfitriaoWidth} height={props.imgAnfitriaoHeight} className={props.style.imgAnfitriao} />

            <div className={props.style.divDescricao}>
                <span className={props.style.descricao}>{props.descricao}</span>

                <div className={props.style.assinaturaAnfitriao}>
                    <Image src={props.imgAssinatura} alt='' width={props.imgAssinaturaWidth} height={props.imgAssinaturaHeight} />
                </div>

                <span className={props.style.info}>{props.info}</span>
            </div>
        </Fragment>
    )
}

