const { devDependencies } = require('./package.json')

module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'babel-plugin-transform-define',
      {
        'process.env.NODE_ENV': 'production',
        EMOJI_DATASOURCE_VERSION: devDependencies['emoji-datasource'],
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          "react": "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat",
          "react/jsx-runtime": "preact/jsx-runtime"
        }
      }
    ],
  ],
  env: {
    'legacy-es': {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
      ],
    },
    'legacy-cjs': {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'cjs',
          },
        ],
      ],
    },
    modern: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              chrome: '77',
              edge: '18',
              firefox: '71',
              safari: '13',
            },
            modules: false,
          },
        ],
      ],
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            }
          },
        ],
      ],
    },
  },
}
