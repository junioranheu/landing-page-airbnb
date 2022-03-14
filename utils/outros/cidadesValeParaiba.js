function cidadesValeParaiba() {
    // Lista de cidades;
    const cidades = [
        {
            id: 1, nome: 'Lorena', multiplicador: 1.2
        },
        {
            id: 2, nome: 'Guaratinguetá', multiplicador: 1.4
        },
        {
            id: 3, nome: 'São José dos Campos', multiplicador: 2
        },
        {
            id: 4, nome: 'São Paulo', multiplicador: 2.5
        },
        {
            id: 5, nome: 'Aparecida', multiplicador: 1.4
        },
        {
            id: 6, nome: 'Canas', multiplicador: 0.7
        },
        {
            id: 7, nome: 'Cunha', multiplicador: 1
        },
        {
            id: 8, nome: 'Piquete', multiplicador: 0.8
        },
        {
            id: 9, nome: 'Potim ', multiplicador: 0.8
        },
        {
            id: 10, nome: 'Roseira', multiplicador: 0.8
        },
        {
            id: 11, nome: 'São José do Barreiro', multiplicador: 1.5
        },
        {
            id: 12, nome: 'Caçapava', multiplicador: 1.4
        },
        {
            id: 13, nome: 'Jacareí', multiplicador: 1.6
        },
        {
            id: 14, nome: 'Bananal', multiplicador: 1.4
        },
        {
            id: 15, nome: 'Cruzeiro', multiplicador: 1.2
        },
        {
            id: 16, nome: 'Ubatuba', multiplicador: 2.2
        },
        {
            id: 17, nome: 'São Sebastião', multiplicador: 2.2
        },
        {
            id: 18, nome: 'Ilhabela', multiplicador: 2.2
        },
        {
            id: 19, nome: 'Caraguatatuba', multiplicador: 2.5
        }
    ]

    // Ordenar alfabeticamente - https://stackoverflow.com/questions/19259233/sorting-json-by-specific-element-alphabetically;
    const ordenado = cidades.sort(function (a, b) {
        a = a.nome.toLowerCase();
        b = b.nome.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
    });

    return ordenado;
}

export default cidadesValeParaiba;

