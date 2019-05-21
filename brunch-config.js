// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^(?!app\/assets\/js)/
    }
  },
  stylesheets: {
    joinTo: 'app.css',
    order: {
      before: [
        'app/styles/bootstrap.css',
        'app/styles/styles.scss',
        'app/styles/mq.scss',
        'app/styles/fonts.scss',
      ]
    }
  },

  templates: {
    sass: {
      mode: 'ruby' // set to 'native' to force libsass
    }
  }

};

exports.plugins = {
  babel: {presets: ['latest']}
};
