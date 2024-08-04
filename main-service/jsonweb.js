const crypto = require('crypto');
const fs = require('fs');

const secret = crypto.randomBytes(64).toString('hex');

fs.writeFileSync('.env', `JWT_SECRET=${secret}\n`, { flag: 'a' });

console.log('JWT_SECRET has been generated and saved to .env file.');
