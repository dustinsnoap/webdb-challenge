module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dballz.sqlite3'
    },
    useNullAsDefault: true,
  }
}