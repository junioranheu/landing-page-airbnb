
export default function Anfitriao(props) {
    return (
        <div className='animate__animated animate__fadeIn animate__faster'>
            <span className={`${props.style.spanAnfitriaoTitulo} ${props.span}`}>{props.nome}</span>
            <span className={props.style.spanAnfitriaoDescricao}>{props.descricao}</span>
        </div>
    )
}
