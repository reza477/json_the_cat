const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

// Given: pass existing breed
// When: fetch called
// Then: err is null, desc is passed to callback


describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.equal(expectedDesc, desc);
      done();
    });
  });
  it('invalid/non-existent breed is passed in ', (done) => {
    fetchBreedDescription('Sibraccon', (err, desc) => {
              // we expect error for this scenario
      assert.isOk(err);

      // const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      
      // assert.equal(expectedDesc, desc);
      done();
    });
  });
});