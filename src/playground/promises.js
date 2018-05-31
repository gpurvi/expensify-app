const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is my resolved data');
        // reject('error wnt wrong');
    }, 1500);
});
console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is my other promise');
        }, 3000);
    });
}).then((data) => {
    console.log('2', data);
}).catch((error) => {
    console.log(error)
});

console.log('after');