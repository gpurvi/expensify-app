// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Gatis Purvins',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const {name: publisherName = 'Self'} = book.publisher;
//
//
// console.log(publisherName);
//
//

//Array destructor
//
//

// const adress = ['sesava street', 'Philly', 'Pensyilvinai', '133584'];
//
// const [, , state = 'New yourk'] = adress;
//
// console.log(`You are in ${city} ${state}`);

const item = ['Coffie (hot)', '2.00', '2.50', '2.75'];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);