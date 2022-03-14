function idiomas(ordernaPor) {
    // Lista de idiomas;
    const idiomas = [
        {
            id: 1, idioma: 'Português', regiao: 'Brasil', sigla: 'BR', codigoTelefonico: '+55'
        },
        {
            id: 2, idioma: 'Bahasa Indonesia', regiao: 'Indonésia', sigla: 'ID', codigoTelefonico: '+62'
        },
        {
            id: 3, idioma: 'Bosanski', regiao: 'Bósnia e Herzegovina', sigla: 'BA', codigoTelefonico: '+387'
        },
        {
            id: 4, idioma: 'Deutsch', regiao: 'Alemanha', sigla: 'DE', codigoTelefonico: '+49'
        },
        {
            id: 5, idioma: 'English', regiao: 'Australia', sigla: 'AU', codigoTelefonico: '+61'
        },
        {
            id: 6, idioma: 'English', regiao: 'Canadá', sigla: 'CA', codigoTelefonico: '+1'
        },
        {
            id: 7, idioma: 'English', regiao: 'India', sigla: 'IN', codigoTelefonico: '+91'
        },
        {
            id: 8, idioma: 'English', regiao: 'Irlanda', sigla: 'IR', codigoTelefonico: '+353'
        },
        {
            id: 9, idioma: 'English', regiao: 'Nova Zelândia', sigla: 'NZ', codigoTelefonico: '+64'
        },
        {
            id: 10, idioma: 'English', regiao: 'Singapura', sigla: 'SG', codigoTelefonico: '+65'
        },
        {
            id: 11, idioma: 'English', regiao: 'Emirados Árabes Unidos', sigla: 'AE', codigoTelefonico: '+971'
        },
        {
            id: 12, idioma: 'Español', regiao: 'Argentina', sigla: 'AR', codigoTelefonico: '+54'
        },
        {
            id: 13, idioma: 'Español', regiao: 'Belize', sigla: 'BE', codigoTelefonico: '+501'
        },
        {
            id: 14, idioma: 'Español', regiao: 'Bolívia', sigla: 'BO', codigoTelefonico: '+591'
        },
        {
            id: 15, idioma: 'Español', regiao: 'Chile', sigla: 'CL', codigoTelefonico: '+56'
        },
        {
            id: 16, idioma: 'Español', regiao: 'Colômbia', sigla: 'CO', codigoTelefonico: '+57'
        },
        {
            id: 17, idioma: 'Español', regiao: 'Costa Rica', sigla: 'CR', codigoTelefonico: '+506'
        },
        {
            id: 18, idioma: 'Español', regiao: 'Equador', sigla: 'EC', codigoTelefonico: '+593'
        },
        {
            id: 19, idioma: 'Español', regiao: 'El Salvador', sigla: 'SV', codigoTelefonico: '+503'
        },
        {
            id: 20, idioma: 'Español', regiao: 'Espanha', sigla: 'ES', codigoTelefonico: '+34'
        },
        {
            id: 21, idioma: 'Español', regiao: 'Estados Unidos', sigla: 'US', codigoTelefonico: '+1'
        },
        {
            id: 22, idioma: 'Español', regiao: 'Guatemala', sigla: 'GT', codigoTelefonico: '+502'
        },
        {
            id: 23, idioma: 'Español', regiao: 'Honduras', sigla: 'HO', codigoTelefonico: '+504'
        },
        {
            id: 24, idioma: 'Español', regiao: 'México', sigla: 'MX', codigoTelefonico: '+52'
        },
        {
            id: 25, idioma: 'Español', regiao: 'Nicarágua', sigla: 'NI', codigoTelefonico: '+505'
        },
        {
            id: 26, idioma: 'Español', regiao: 'Panamá', sigla: 'PA', codigoTelefonico: '+507'
        },
        {
            id: 27, idioma: 'Español', regiao: 'Paraguai', sigla: 'PY', codigoTelefonico: '+595'
        },
        {
            id: 28, idioma: 'Español', regiao: 'Perú', sigla: 'PE', codigoTelefonico: '+51'
        },
        {
            id: 29, idioma: 'Français', regiao: 'Bélgica', sigla: 'BE', codigoTelefonico: '+32'
        },
        {
            id: 30, idioma: 'Français', regiao: 'França', sigla: 'FR', codigoTelefonico: '+33'
        },
        {
            id: 31, idioma: 'Français', regiao: 'Suiça', sigla: 'SU', codigoTelefonico: '+41'
        },
        {
            id: 32, idioma: 'Italiano', regiao: 'Itália', sigla: 'IT', codigoTelefonico: '+39'
        },
        {
            id: 33, idioma: 'Polski', regiao: 'Polônia', sigla: 'PL', codigoTelefonico: '+48'
        },
        {
            id: 34, idioma: 'Română', regiao: 'Romênia', sigla: 'RO', codigoTelefonico: '+40'
        },
        {
            id: 35, idioma: 'Tagalog', regiao: 'Filipinas', sigla: 'PH', codigoTelefonico: '+63'
        },
        {
            id: 36, idioma: 'Tiếng Việt', regiao: 'Vietnã', sigla: 'VN', codigoTelefonico: '+84'
        },
        {
            id: 37, idioma: 'Türkçe', regiao: 'Turquia', sigla: 'TK', codigoTelefonico: '+90'
        },
        {
            id: 38, idioma: 'Русский', regiao: 'Russia', sigla: 'RU', codigoTelefonico: '+7'
        },
        {
            id: 39, idioma: '中国人', regiao: 'China', sigla: 'CN', codigoTelefonico: '+86'
        },
        {
            id: 40, idioma: '日本', regiao: 'Japão', sigla: 'JP', codigoTelefonico: '+81'
        }
    ]

    // Ordenar alfabeticamente - https://stackoverflow.com/questions/19259233/sorting-json-by-specific-element-alphabetically;
    const ordenado = idiomas.sort(function (a, b) {
        if (ordernaPor === 'idioma'){
            a = a.idioma.toLowerCase();
            b = b.idioma.toLowerCase();
        } else if (ordernaPor === 'regiao'){
            a = a.regiao.toLowerCase();
            b = b.regiao.toLowerCase();
        }

        return a < b ? -1 : a > b ? 1 : 0;
    });

    return ordenado;
}

export default idiomas;