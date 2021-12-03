const { json } = require('../utils');

exports.handler = (event) => {
  console.log(event);
  return json({ message: 'Hello World!' });
}
