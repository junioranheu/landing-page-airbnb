import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <Link href='/host/home'>
                <a>
                    <h1>Projeto em desenvolvimento</h1>
                    <h3>Clique aqui para ser direcionado à página em construção</h3>
                </a>
            </Link>
        </div>
    )
}
