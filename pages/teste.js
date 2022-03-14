import React, { useEffect } from 'react';

export default function Teste({ estados }) {
    useEffect(() => {
        document.title = 'Teste';
    }, [])

    return (
        <div>
            <ul>
                {estados.map((e) => (
                    <li>{e.nome}</li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://fluxoapi.azurewebsites.net/api/estadosapi/todos')
    const estados = await res.json();

    return {
        props: {
            estados,
        },
    }
}
