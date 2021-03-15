const moment = require('moment');

function get_date_time() {
    return moment().format('YYYY-LL-ZZThh:mm');
}

module.exports = {
    get_date_time
}