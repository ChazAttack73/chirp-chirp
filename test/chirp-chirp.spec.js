var chai = require('chai');
var expect = chai.expect;
chai.should();

var chirpChirp = require( './../chirp-chirp.js' );

describe( 'chirpChirp', function () {
  it( 'should exist', function () {
    expect( chirpChirp ).to.exist;
    expect( chirpChirp ).to.be.a( 'function' );
  });
});