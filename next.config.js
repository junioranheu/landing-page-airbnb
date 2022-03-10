const withVideos = require('next-videos'); // Habilitar import de vídeos; https://www.npmjs.com/package/next-videos

module.exports = withVideos(
    {
        swcMinify: true // https://nextjs.org/docs/advanced-features/compiler
    }
)