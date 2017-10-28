const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                'node_modules/govuk_frontend_toolkit/stylesheets',
                'node_modules/govuk-elements-sass/public/sass'
              ]
            }
          }
        ]
      }
    ]
  }
};
