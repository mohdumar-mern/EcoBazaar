import crypto from 'crypto';

const resetToken = crypto.randomBytes(20).toString('hex');
console.log(resetToken);