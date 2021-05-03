const nextTranslate = require('next-translate')

module.exports = {
  ...nextTranslate(),
  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'Authorization',
            value: 'Bearer',
          },
        ],
      },
    ]
  },
}
