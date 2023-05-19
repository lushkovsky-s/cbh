const {deterministicPartitionKey} = require('./dpk');

describe('deterministicPartitionKey', () => {
  test('Returns the same string event.partitionKey when provided as a string', () => {
    expect(deterministicPartitionKey({partitionKey: 'abc'})).toBe('abc');
  });

  test('Return stringified event.partitionKey when provided', () => {
    expect(deterministicPartitionKey({partitionKey: 1})).toBe('1');
  });

  test('Returns the same propper result for 000....0 (257 char long string) event.partitionKey', () => {
    expect(
      deterministicPartitionKey({
        partitionKey: new Array(257).fill('0').join(''),
      }),
    ).toBe(
      'd275ec0adb97677f30cce60d1a692033165e22f0bd724f55ccf7d17240a29f40c3d7c891bd41746db4cfae93d8bffb8105aa05c497c27626037d6458b47116a8',
    ); // The value from first test tun on pre-refactored code
  });

  test('Returns the same propper result for event without event.partitionKey', () => {
    expect(deterministicPartitionKey({some: 1})).toBe(
      'b5f6f5c2eae97aabd6336075a124071f8f2c996b91199707266fe8df1bd06ec258ebb22ececc16b36d3101f1c406d4693039bd5fd513ccf2fe912b78a93b9477',
    ); // The value from first test run on pre-refatored code
  });

  test('Returns "0" without event provided', () => {
    expect(deterministicPartitionKey()).toBe('0');
  });
});
