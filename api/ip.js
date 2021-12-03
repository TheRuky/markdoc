const { json } = require('./utils');

exports.handler = (event) => {
  console.log(event.headers);
  return json({ ip: event.headers['client-ip'] });
}
