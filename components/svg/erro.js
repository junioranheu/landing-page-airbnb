export default function Erro(props) {
    return (
        <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' aria-label='Indicador de erro' role='img' focusable='false'
            style={{ display: 'block', height: props.height, width: props.width, fill: 'currentcolor' }}>
            <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 10.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.8-6.6H7.2v5.2h1.6z'>
            </path>
        </svg>
    )
}
