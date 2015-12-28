module.exports = chirpChirp;

function chirpChirp ( n ) {
  if( n === 1 ) {
    return 'chirp';
  }
  return chirpChirp( n - 1 ) + ' chirp';
}