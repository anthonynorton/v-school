// "Template" Before Starting
/*
const smp = {
  displayUsers: function displayUsersFn() {
    // Show each of the users 1) Name, 2) Favorite movie
  },
  users: [
    {
      firstName: , // 'string'
      lastName: , // 'string'
      gender: , // 'female' or 'male'
      movieCollection: [
        {
          title: , // string
          length: ,// in minutes
          cast: [
            {
              name: , // fullname, as listed on imdb
              characterName: , // Name of character played in the movie
              releaseDate: , // Date object
              genres: , // Array of strings
              rating: , // American MPAA
              imdbRating: {
                score: , // Numeric score
                votes: , // Number of people who voted on it
              }
            }
          ],
          favorite: , // true, false [defaults to false]
        },
      ]
    },
  ]
}
*/

const smp = {
  displayUsers: function displayUsersFn() {
    // Show each of the users 1) Name, 2) Favorite movie
    this.users.forEach(this.displayUser.bind(this));
  },
  displayUser: function displayUserFn(user) {
    const pronoun = user.gender === 'female' ? 'her' : 'his';
    const movieQuantity = user.movieCollection.length;
    const numMoviesStr = movieQuantity > 1 ? `${movieQuantity} movies, but ${pronoun} favorite is` : '1 movie, it is';
    const intro = `\x1b[31m${user.firstName} ${user.lastName}\x1b[0m has ${numMoviesStr} \x1b[32m${user.getFavoriteMovie().title}\x1b[0m.`;
    const star = user.getFavoriteMovie().cast[0];
    console.log(`${intro} It stars \x1b[35m${star.name}\x1b[0m as \x1b[34m${star.characterName}\x1b[0m.`);
  },
  users: [
    {
      firstName: 'John',
      lastName: 'Smith',
      gender: 'male',
      movieCollection: [
        {
          title: 'The Matrix',
          length: 136,
          cast: [
            {
              name: 'Keanu Reeves',
              characterName: 'Neo',
            },
            {
              name: 'Laurence Fishburne',
              characterName: 'Morpheus',
            },
            {
              name: 'Carrie-Anne Moss',
              characterName: 'Trinity',
            },
            {
              name: 'Hugo Weaving',
              characterName: 'Agent Smith',
            },
            {
              name: 'Gloria Foster',
              characterName: 'Oracle',
            },
            {
              name: 'Joe Pantoliano',
              characterName: 'Cypher',
            },
            {
              name: 'Marcus Chong',
              characterName: 'Tank',
            },
            {
              name: 'Julian Arahanga',
              characterName: 'Apoc',
            },
            {
              name: 'Matt Doran',
              characterName: 'Mouse',
            },
            {
              name: 'Belinda McClory',
              characterName: 'Switch',
            },
            {
              name: 'Anthony Ray Parker',
              characterName: 'Dozer',
            },
            {
              name: 'Paul Goddard',
              characterName: 'Agent Brown',
            },
            {
              name: 'Robert Taylor',
              characterName: 'Agent Jones',
            },
            {
              name: 'David Aston',
              characterName: 'Rhineheart',
            },
          ],
          releaseDate: new Date('March 31, 1999 00:01:00'),
          genres: ['Action', 'Sci-Fi'],
          rating: 'R',
          imdbRating: {
            score: 8.7,
            votes: 1407102,
          },
          favorite: false,
        },
        {
          title: 'The King\'s Speech',
          length: 136,
          cast: [
            { name: 'Colin Firth', characterName: 'King George VI' },
            { name: 'Helena Bonham Carter', characterName: 'Queen Elizabeth' },
            { name: 'Derek Jacobi', characterName: 'Archbishop Cosmo Lang' },
            { name: 'Robert Portal', characterName: 'Equerry' },
            { name: 'Richard Dixon', characterName: 'Private Secretary' },
            { name: 'Paul Trussell', characterName: 'Chauffeur' },
            { name: 'Adrian Scarborough', characterName: 'BBC Radio Announcer' },
            { name: 'Andrew Havill', characterName: 'Robert Wood' },
            { name: 'Charles Armstrong', characterName: 'BBC Technician' },
            { name: 'Roger Hammond', characterName: 'Dr. Blandine Bentham' },
            { name: 'Geoffrey Rush', characterName: 'Lionel Logue' },
            { name: 'Calum Gittins', characterName: 'Laurie Logue' },
            { name: 'Jennifer Ehle', characterName: 'Myrtle Logue' },
            { name: 'Dominic Applewhite', characterName: 'Valentine Logue' },
            { name: 'Ben Wimsett', characterName: 'Anthony Logue' },
          ],
          releaseDate: new Date('December 25, 2010 00:01:00'),
          genres: ['Biography', 'Drama', 'History'],
          rating: 'R',
          imdbRating: {
            score: 8.0,
            votes: 564156,
          },
          favorite: true,
        },
      ],
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      gender: 'female',
      movieCollection: [
        {
          title: 'Much Adu About Nothing',
          length: 111,
          cast: [
            { name: 'Richard Briers', characterName: 'Leonato' },
            { name: 'Kate Beckinsale', characterName: 'Hero' },
            { name: 'Imelda Staunton', characterName: 'Margaret' },
            { name: 'Jimmy Yuill', characterName: 'Friar Francis' },
            { name: 'Brian Blessed', characterName: 'Antonio' },
            { name: 'Andy Hockley', characterName: 'George Seacole' },
            { name: 'Chris Barnes', characterName: 'Francis Seacole' },
            { name: 'Conrad Nelson', characterName: 'Hugh Oatcake' },
            { name: 'Phyllida Law', characterName: 'Ursula' },
            { name: 'Emma Thompson', characterName: 'Beatrice' },
            { name: 'Alex Lowe', characterName: 'Messenger' },
            { name: 'Denzel Washington', characterName: 'Don Pedro' },
            { name: 'Keanu Reeves', characterName: 'Don John' },
            { name: 'Richard Clifford', characterName: 'Conrade' },
            { name: 'Gerard Horan', characterName: 'Borachio' },
          ],
          releaseDate: new Date('July 2, 1993 00:01:00'),
          genres: ['Comedy', 'Drama', 'Romance'],
          rating: 'PG-13',
          imdbRating: {
            score: 7.4,
            votes: 40477,
          },
          favorite: true,
        },
        {
          title: 'My Left Foot',
          length: 103,
          cast: [
            { name: 'Daniel Day-Lewis', characterName: 'Christy Brown' },
            { name: 'Brenda Fricker', characterName: 'Mrs. Brown' },
            { name: 'Alison Whelan', characterName: 'Sheila' },
            { name: 'Kirsten Sheridan', characterName: 'Sharon' },
            { name: 'Declan Croghan', characterName: 'Tom' },
            { name: 'Eanna MacLiam', characterName: 'Benny' },
            { name: 'Marie Conmee', characterName: 'Sadie' },
            { name: 'Cyril Cusack', characterName: 'Lord Castlewelland' },
            { name: 'Phelim Drew', characterName: 'Brian' },
            { name: 'Ruth McCabe', characterName: 'Mary' },
            { name: 'Fiona Shaw', characterName: 'Dr. Eileen Cole' },
            { name: 'Ray McAnally', characterName: 'Mr. Brown' },
            { name: 'Pat Laffan', characterName: 'Barman (as Patrick Laffan)' },
            { name: 'Derry Power', characterName: 'Customer in Bar' },
            { name: 'Hugh O\'Conor', characterName: 'Young Christy Brown'},
          ],
          releaseDate: new Date('March 30, 1990 00:01:00'),
          genres: ['Biography', 'Drama'],
          rating: 'R',
          imdbRating: {
            score: 7.9,
            votes: 57779,
          },
          favorite: false,
        },
        {
          title: 'A Quiet Place',
          length: 90,
          cast: [
            { name: 'Emily Blunt', characterName: 'Evelyn Abbott' },
            { name: 'John Krasinski', characterName: 'Lee Abbott' },
            { name: 'Millicent Simmonds', characterName: 'Regan Abbott' },
            { name: 'Noah Jupe', characterName: 'Marcus Abbott' },
            { name: 'Cade Woodward', characterName: 'Beau Abbott' },
            { name: 'Leon Russom', characterName: 'Man in the Woods' },
          ],
          releaseDate: new Date('April 6, 2018 00:01:00'),
          genres: ['Drama', 'Horror', 'Sci-Fi'],
          rating: 'PG-13',
          imdbRating: {
            score: 8.0,
            votes: 114641,
          },
          favorite: false,
        },
      ],
    },
  ]
}

function getFavoriteMovieFn() {
  if (this.movieCollection == null) {
    debugger;
  }
  let favoriteMovie = this.movieCollection.filter(movie => movie.favorite);
  if (Array.isArray(favoriteMovie) && favoriteMovie.length > 0) return favoriteMovie[0];
  return this.movieCollection[0];
}

// Add a "getFavoriteMovie" function to each user.
smp.users.forEach(user => {
  user.getFavoriteMovie = getFavoriteMovieFn.bind(user);
})

// Kick off the display!!! Wha-what!?
smp.displayUsers();