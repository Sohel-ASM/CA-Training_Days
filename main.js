// Randomly selecting an event
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};

// Days to train
const getTrainingDays = event => {
    let days = 0;
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }

    return days;
};

// Printing participant's name, event name, and number of days to train
const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

//Trying the program for two participants
const name = 'Nala';
const event = getRandEvent();
const days = getTrainingDays(event);


logEvent(name, event);
logTime(name, days);

const name2 = 'Warren';
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);

logEvent(name2, event2);
logTime(name2, days2);
