// i want to make an app where we can calculate a taxi ride.
// rides between 6am and 6pm initial fare $3.50 and adds $1.50 every 1 mile.
// rides between 6pm and 6am initial fare is $5.00 and adds $2.00 every 1 mile.
// cost = ratePermile * miles + initial fare.


// const result = prompt('How Much Is This Going To Run Me??')


function checkRideCost (morningCommute, eveningCommute, miles) {
    const initAm = 3.5;
    const initPm = 5;
    const amRatePerMile = 1.5;
    const pmRatePerMile = 2;

    console.log(morningCommute)
    console.log(eveningCommute)
    console.log(miles)
    let cost = 0;
    if(morningCommute === 'y') {
        cost =  (amRatePerMile * miles) + initAm;
        return '$' + cost 
    }else if(eveningCommute === 'y') {
        cost =  (pmRatePerMile * miles) + initPm;
        return '$' + cost 
    } else if(morningCommute === 'n') {
        cost = (pmRatePerMile * miles) + initPm;
        return '$' + cost
    } else if(eveningCommute === 'n') {
        cost = (amRatePerMile * miles) + initPm;
        return '$' + cost
    }
}


// console.log(checkRideCost(true, false, 4))










// take in just am to see if it works
// user inputs distance
//user inputs time of day 

// const mileage = process.argv[2];
// const time = process.argv[3];
//const mileage = process.argv[2];
// const time = am;
// const amRideMileage = amRate * '1.5';
// const pmRideMileage = pmRate * '2';