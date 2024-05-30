const SitemapGenerator = require('sitemap-generator');

// Créez un générateur
const generator = SitemapGenerator('https://www.jardinparfait.com', {
  stripQuerystring: false,
});

// Démarrez le générateur
generator.start();