const moment = require('moment');

function get_date_time() {
    return moment().format('YYYY-LL-ZZThh:mm');
}

console.log(get_date_time())

module.exports = {
    get_date_time
}