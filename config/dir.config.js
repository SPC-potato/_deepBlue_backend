const path = require('path');
const ROOT_PATH = path.resolve(__dirname, '../');
const ENTRY_PATH = path.resolve(ROOT_PATH, 'entry');
const STATIC_PATH = path.resolve(ROOT_PATH, 'static');
const VIEW_PATH = path.resolve(ROOT_PATH, 'view');

module.exports = {
    ROOT_PATH: ROOT_PATH,
    ENTRY_PATH: ENTRY_PATH,
    STATIC_PATH: STATIC_PATH,
    VIEW_PATH: VIEW_PATH
};