
function idiomas() {
    // Lista de idiomas;
    const idiomas = [
        {
            id: 1, idioma: 'Português', regiao: 'Brasil', sigla: 'BR', codigoTelefonico: 'xxx'
        },
        {
            id: 2, idioma: 'Bahasa Indonesia', regiao: 'Indonesia', sigla: 'ID', codigoTelefonico: 'xxx'
        },
        {
            id: 3, idioma: 'Bosanski', regiao: 'Bosnia and Herzegovina', sigla: 'BA', codigoTelefonico: 'xxx'
        },
        {
            id: 4, idioma: 'Deutsch', regiao: 'Deutschland', sigla: 'DE', codigoTelefonico: 'xxx'
        },
        {
            id: 5, idioma: 'English', regiao: 'Australia', sigla: 'AU', codigoTelefonico: 'xxx'
        },
        {
            id: 6, idioma: 'English', regiao: 'Canada', sigla: 'CA', codigoTelefonico: 'xxx'
        },
        {
            id: 7, idioma: 'English', regiao: 'India', sigla: 'IN', codigoTelefonico: 'xxx'
        },
        {
            id: 8, idioma: 'English', regiao: 'Ireland', sigla: 'IR', codigoTelefonico: 'xxx'
        },
        {
            id: 9, idioma: 'English', regiao: 'New Zealand', sigla: 'NZ', codigoTelefonico: 'xxx'
        },
        {
            id: 10, idioma: 'English', regiao: 'Singapore', sigla: 'SG', codigoTelefonico: 'xxx'
        },
        {
            id: 11, idioma: 'English', regiao: 'United Arab Emirates', sigla: 'AE', codigoTelefonico: 'xxx'
        },
        {
            id: 12, idioma: 'Español', regiao: 'Argentina', sigla: 'AR', codigoTelefonico: 'xxx'
        },
        {
            id: 13, idioma: 'Español', regiao: 'Belice', sigla: 'BE', codigoTelefonico: 'xxx'
        },
        {
            id: 14, idioma: 'Español', regiao: 'Bolivia', sigla: 'BO', codigoTelefonico: 'xxx'
        },
        {
            id: 15, idioma: 'Español', regiao: 'Chile', sigla: 'CL', codigoTelefonico: 'xxx'
        },
        {
            id: 16, idioma: 'Español', regiao: 'Colombia', sigla: 'CO', codigoTelefonico: 'xxx'
        },
        {
            id: 17, idioma: 'Español', regiao: 'Costa Rica', sigla: 'CR', codigoTelefonico: 'xxx'
        },
        {
            id: 18, idioma: 'Español', regiao: 'Ecuador', sigla: 'EC', codigoTelefonico: 'xxx'
        },
        {
            id: 19, idioma: 'Español', regiao: 'El Salvador', sigla: 'SV', codigoTelefonico: 'xxx'
        },
        {
            id: 20, idioma: 'Español', regiao: 'España', sigla: 'ES', codigoTelefonico: 'xxx'
        },
        {
            id: 21, idioma: 'Español', regiao: 'Estados Unidos', sigla: 'US', codigoTelefonico: 'xxx'
        },
        {
            id: 22, idioma: 'Español', regiao: 'Guatemala', sigla: 'GT', codigoTelefonico: 'xxx'
        },
        {
            id: 23, idioma: 'Español', regiao: 'Honduras', sigla: 'HO', codigoTelefonico: 'xxx'
        },
        {
            id: 24, idioma: 'Español', regiao: 'México', sigla: 'MX', codigoTelefonico: 'xxx'
        },
        {
            id: 25, idioma: 'Español', regiao: 'Nicaragua', sigla: 'NI', codigoTelefonico: 'xxx'
        },
        {
            id: 26, idioma: 'Español', regiao: 'Panamá', sigla: 'PA', codigoTelefonico: 'xxx'
        },
        {
            id: 27, idioma: 'Español', regiao: 'Paraguay', sigla: 'PY', codigoTelefonico: 'xxx'
        },
        {
            id: 28, idioma: 'Español', regiao: 'Perú', sigla: 'PE', codigoTelefonico: 'xxx'
        },
        {
            id: 29, idioma: 'Français', regiao: 'Belgique', sigla: 'BE', codigoTelefonico: 'xxx'
        },
        {
            id: 30, idioma: 'Français', regiao: 'Canada', sigla: 'CA', codigoTelefonico: 'xxx'
        },
        {
            id: 31, idioma: 'Français', regiao: 'France', sigla: 'FR', codigoTelefonico: 'xxx'
        },
        {
            id: 32, idioma: 'Français', regiao: 'Suisse', sigla: 'SU', codigoTelefonico: 'xxx'
        },
        {
            id: 33, idioma: 'Italiano', regiao: 'Italia', sigla: 'IT', codigoTelefonico: 'xxx'
        },
        {
            id: 34, idioma: 'Polski', regiao: 'Polska', sigla: 'PL', codigoTelefonico: 'xxx'
        },
        {
            id: 35, idioma: 'Română', regiao: 'România', sigla: 'RO', codigoTelefonico: 'xxx'
        },
        {
            id: 36, idioma: 'Tagalog', regiao: 'Filipinas', sigla: 'PH', codigoTelefonico: 'xxx'
        },
        {
            id: 37, idioma: 'Tiếng Việt', regiao: 'Việt Nam', sigla: 'VN', codigoTelefonico: 'xxx'
        },
        {
            id: 38, idioma: 'Türkçe', regiao: 'Türkiye', sigla: 'TK', codigoTelefonico: 'xxx'
        },
        {
            id: 39, idioma: 'Русский', regiao: 'Россия', sigla: 'RU', codigoTelefonico: 'xxx'
        },
        {
            id: 40, idioma: '中国人', regiao: '中国', sigla: 'CN', codigoTelefonico: 'xxx'
        },
        {
            id: 41, idioma: '日本', regiao: '日本', sigla: 'JP', codigoTelefonico: 'xxx'
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