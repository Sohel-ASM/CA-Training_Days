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
