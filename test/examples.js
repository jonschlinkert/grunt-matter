// var path = require('path');
// var yfm = require('../lib/index');



// var fixtures = path.join.bind(null, 'fixtures/');
// var actual = path.join.bind(null, 'actual/');

// // Add YFM, and sort
// yfm.extend(fixtures('no_yfm/*.hbs'), actual('added/'), {
//   sort: true,
//   props: {
//     title: 'Alpha',
//     description: 'Lorem ipsum'
//   }
// });

// // Add YFM, and don't sort
// yfm.extend(fixtures('no_yfm/*.hbs'), actual('added/no_sort/'), {
//   sort: true,
//   props: {
//     title: 'Alpha',
//     description: 'Lorem ipsum'
//   }
// });

// // Extend YFM, and sort
// yfm.extend(fixtures('*.hbs'), actual('extended/'), {
//   sort: true,
//   props: {
//     title: 'Alpha',
//     description: 'Lorem ipsum'
//   }
// });

// // Extend YFM, and don't sort
// yfm.extend(fixtures('*.hbs'), actual('extended/no_sort/'), {
//   sort: false,
//   props: {
//     title: 'Alpha',
//     description: 'Lorem ipsum'
//   }
// });

// // // Add YFM, dont't sort
// // yfm.extend(fileWithoutYFM, addedYFM, {
// //   sort: false,
// //   props: {
// //     title: 'Beta',
// //     description: 'Lorem ipsum'
// //   }
// // });
