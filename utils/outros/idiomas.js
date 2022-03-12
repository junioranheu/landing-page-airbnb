
function idiomas() {
    // Lista de idiomas;
    const idiomas = [
        {
            id: 1, idioma: 'Português', regiao: 'Brasil', sigla: 'BR'
        },
        {
            id: 2, idioma: 'Bahasa Indonesia', regiao: 'Indonesia', sigla: 'ID'
        },
        {
            id: 3, idioma: 'Bosanski', regiao: 'Bosnia and Herzegovina', sigla: 'BA'
        },
        {
            id: 4, idioma: 'Deutsch', regiao: 'Deutschland', sigla: 'DE'
        },
        {
            id: 5, idioma: 'English', regiao: 'Australia', sigla: 'AU'
        },
        {
            id: 6, idioma: 'English', regiao: 'Canada', sigla: 'CA'
        },
        {
            id: 7, idioma: 'English', regiao: 'India', sigla: 'IN'
        },
        {
            id: 8, idioma: 'English', regiao: 'Ireland', sigla: 'IR'
        },
        {
            id: 9, idioma: 'English', regiao: 'New Zealand', sigla: 'NZ'
        },
        {
            id: 10, idioma: 'English', regiao: 'Singapore', sigla: 'SG'
        },
        {
            id: 11, idioma: 'English', regiao: 'United Arab Emirates', sigla: 'AE'
        },
        {
            id: 12, idioma: 'Español', regiao: 'Argentina', sigla: 'AR'
        },
        {
            id: 13, idioma: 'Español', regiao: 'Belice', sigla: 'BE'
        },
        {
            id: 14, idioma: 'Español', regiao: 'Bolivia', sigla: 'BO'
        },
        {
            id: 15, idioma: 'Español', regiao: 'Chile', sigla: 'CL'
        },
        {
            id: 16, idioma: 'Español', regiao: 'Colombia', sigla: 'CO'
        },
        {
            id: 17, idioma: 'Español', regiao: 'Costa Rica', sigla: 'CR'
        },
        {
            id: 18, idioma: 'Español', regiao: 'Ecuador', sigla: 'EC'
        },
        {
            id: 19, idioma: 'Español', regiao: 'El Salvador', sigla: 'SV'
        },
        {
            id: 20, idioma: 'Español', regiao: 'España', sigla: 'ES'
        },
        {
            id: 21, idioma: 'Español', regiao: 'Estados Unidos', sigla: 'US'
        },
        {
            id: 22, idioma: 'Español', regiao: 'Guatemala', sigla: 'GT'
        },
        {
            id: 23, idioma: 'Español', regiao: 'Honduras', sigla: 'HO'
        },
        {
            id: 24, idioma: 'Español', regiao: 'México', sigla: 'MX'
        },
        {
            id: 25, idioma: 'Español', regiao: 'Nicaragua', sigla: 'NI'
        },
        {
            id: 26, idioma: 'Español', regiao: 'Panamá', sigla: 'PA'
        },
        {
            id: 27, idioma: 'Español', regiao: 'Paraguay', sigla: 'PY'
        },
        {
            id: 28, idioma: 'Español', regiao: 'Perú', sigla: 'PE'
        },
        {
            id: 29, idioma: 'Français', regiao: 'Belgique', sigla: 'BE'
        },
        {
            id: 30, idioma: 'Français', regiao: 'Canada', sigla: 'CA'
        },
        {
            id: 31, idioma: 'Français', regiao: 'France', sigla: 'FR'
        },
        {
            id: 32, idioma: 'Français', regiao: 'Suisse', sigla: 'SU'
        },
        {
            id: 33, idioma: 'Italiano', regiao: 'Italia', sigla: 'IT'
        },
        {
            id: 34, idioma: 'Polski', regiao: 'Polska', sigla: 'PL'
        },
        {
            id: 35, idioma: 'Română', regiao: 'România', sigla: 'RO'
        },
        {
            id: 36, idioma: 'Tagalog', regiao: 'Filipinas', sigla: 'PH'
        },
        {
            id: 37, idioma: 'Tiếng Việt', regiao: 'Việt Nam', sigla: 'VN'
        },
        {
            id: 38, idioma: 'Türkçe', regiao: 'Türkiye', sigla: 'TK'
        },
        {
            id: 39, idioma: 'Русский', regiao: 'Россия', sigla: 'RU'
        },
        {
            id: 40, idioma: '中国人', regiao: '中国', sigla: 'CN'
        },
        {
            id: 41, idioma: '日本', regiao: '日本', sigla: 'JP'
        }
    ]

    // Ordenar alfabeticamente - https://stackoverflow.com/questions/19259233/sorting-json-by-specific-element-alphabetically;
    const idiomasOrdenados = idiomas.sort(function (a, b) {
        a = a.idioma.toLowerCase();
        b = b.idioma.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
    });

    return idiomasOrdenados;
}

export default idiomas;