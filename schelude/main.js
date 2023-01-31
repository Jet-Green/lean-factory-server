const schedule = require('node-schedule');

module.exports = function setupScheludes() {
    // ADD CHECKING PROBLEMS
    const job = schedule.scheduleJob('11 * * * *', () => { // run every hour at minute 1
        console.log('The answer to life, the universe, and everything!');
    });
}