
function moedas() {
    // Lista de moedas;
    const moedas = [
        {
            id: 1, moeda: 'Real brasileiro', cifrao: 'R$', sigla: 'BRL'
        },
        {
            id: 2, moeda: 'Baht tailandês', cifrao: '฿', sigla: 'THB'
        },
        {
            id: 3, moeda: 'Colón costa-riquenho', cifrao: '₡', sigla: 'CRC'
        },
        {
            id: 4, moeda: 'Coroa checa', cifrao: 'Kč', sigla: 'CZK'
        },
        {
            id: 5, moeda: 'Coroa dinamarquesa', cifrao: 'kr', sigla: 'DKK'
        },
        {
            id: 6, moeda: 'Coroa norueguesa', cifrao: 'kr', sigla: 'NOK'
        },
        {
            id: 7, moeda: 'Coroa sueca', cifrao: 'kr', sigla: 'SEK'
        },
        {
            id: 8, moeda: 'Dirham dos Emirados Árabes Unidos', cifrao: 'ﺩ.ﺇ', sigla: 'AED'
        },
        {
            id: 9, moeda: 'Dólar americano', cifrao: '$', sigla: 'USD'
        },
        {
            id: 10, moeda: 'Dólar canadense', cifrao: '$', sigla: 'CAD'
        },
        {
            id: 11, moeda: 'Euro', cifrao: '€', sigla: 'EUR'
        },
        {
            id: 12, moeda: 'Franco suíço', cifrao: 'SFr', sigla: 'CHF'
        },
        {
            id: 13, moeda: 'Iene japonês', cifrao: '¥', sigla: 'JPY'
        },
        {
            id: 14, moeda: 'Libra esterlina', cifrao: '£', sigla: 'GBP'
        },
        {
            id: 15, moeda: 'Lira turca', cifrao: '₺', sigla: 'TRY'
        },
        {
            id: 16, moeda: 'Novo shekel israelense', cifrao: '₪', sigla: 'ILS'
        },
        {
            id: 17, moeda: 'Peso chileno', cifrao: '$', sigla: 'CLP'
        },
        {
            id: 18, moeda: 'Peso colombiano', cifrao: '$', sigla: 'COP'
        },
        {
            id: 19, moeda: 'Peso mexicano', cifrao: '$', sigla: 'MXN'
        },
        {
            id: 20, moeda: 'Rand Sul-africano', cifrao: 'R', sigla: 'ZAR'
        },
        {
            id: 21, moeda: 'Rublo russo', cifrao: '₽', sigla: 'RUB'
        },
        {
            id: 22, moeda: 'Rúpia indiana', cifrao: '₹', sigla: 'INR'
        },
        {
            id: 23, moeda: 'Sol peruano', cifrao: 'S/', sigla: 'PEN'
        },
        {
            id: 24, moeda: 'Won sul-coreano', cifrao: '₩', sigla: 'KRW'
        },
        {
            id: 25, moeda: 'Yuan chinês', cifrao: '￥', sigla: 'CNY'
        }
    ]

    // Ordenar alfabeticamente - https://stackoverflow.com/questions/19259233/sorting-json-by-specific-element-alphabetically;
    const idiomasOrdenados = moedas.sort(function (a, b) {
        a = a.moeda.toLowerCase();
        b = b.moeda.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
    });

    return idiomasOrdenados;
}

export default moedas;