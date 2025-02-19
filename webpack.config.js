const path = require('path');

module.exports = {
  entry: './src/index.js', // Point d'entrée de ton application
  output: {
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie pour les fichiers générés
    filename: 'bundle.js', // Nom du fichier JavaScript généré
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Applique la règle aux fichiers .js et .jsx
        exclude: /node_modules/, // Exclure les fichiers dans node_modules
        use: {
          loader: 'babel-loader', // Utiliser Babel pour compiler JS/JSX
        },
      },
      {
        test: /\.css$/, // Règle pour les fichiers CSS
        use: ['style-loader', 'css-loader'], // Charger et injecter du CSS dans le DOM
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Permettre d'importer les fichiers sans spécifier l'extension
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // Serveur Webpack pour la dev
    compress: true,
    port: 3000, // Port pour le serveur de développement
  },
  mode: 'development', // Mode développement
};
