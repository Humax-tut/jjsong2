const users = require('./Users.json');
const board = require('./Board.json');

// http://localhost:4000/Users
// http://localhost:4000/Board

module.exports = () => ({
    users: users,
    board: board
});