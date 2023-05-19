const crypto = require('crypto');

exports.deterministicPartitionKey = (
  event,
  trivialPartitionKey = '0',
  maxPatitionLen = 256,
  hashAlgorithm = 'sha3-512',
) => {
  const stringify = input =>
    typeof input === 'string' ? input : JSON.stringify(input);
  const hash = input =>
    crypto
      .createHash(hashAlgorithm)
      .update(stringify(input))
      .digest('hex');

  const candidate = event?.partitionKey
    ? stringify(event?.partitionKey)
    : event
    ? hash(event)
    : trivialPartitionKey;

  return candidate.length > maxPatitionLen ? hash(candidate) : candidate;
};
