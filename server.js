require('dontenv').config();
require('./lib/utils/connect')();
const app = require('./lib/app');

app.listen(7890, () => {
    console.log('running');
});