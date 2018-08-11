if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://bris:holahello7@ds119442.mlab.com:19442/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}