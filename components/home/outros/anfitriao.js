
export default function Anfitriao(prop) {
    return (
        <div className='animate__animated animate__fadeIn animate__faster'>
            <span className={`${prop.style.spanAnfitriaoTitulo} ${prop.span}`}>{prop.nome}</span>
            <span className={prop.style.spanAnfitriaoDescricao}>{prop.descricao}</span>
        </div>
    )
}
