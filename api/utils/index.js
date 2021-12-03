const json = (body, { statusCode, headers } = { statusCode: 200 }) => {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
    body: JSON.stringify(body || {}),
  };
}

module.exports = {
  json,
};
