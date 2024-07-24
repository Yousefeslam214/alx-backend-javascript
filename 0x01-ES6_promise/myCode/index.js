// Promise
function getWeather() {
    return new Promise(function (resolve, reject) {
        resolve('Sunny');
    });
}

getWeather().then(function (data) {
    console.log(data);
});
// const promise = getWeather();
// promise.then(function (data) {
//     console.log(data);
// });

// async/await
async function getWeather() {
    return 'Sunny';
}

async function displayWeather() {
    try {
        const weather = await getWeather();
        console.log(weather);
    } catch (error) {
        console.error(error);
    }
}

displayWeather();
