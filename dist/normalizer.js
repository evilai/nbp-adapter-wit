'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (result) {
    var entities = (0, _get2.default)(result, 'body.entities');
    if (!entities) {
        throw new Error(ERROR_WIT_NORMALIZER_DATA_CORRUPTED);
    }

    return entities;
};

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERROR_WIT_NORMALIZER_DATA_CORRUPTED = 'Data, coming from wit.ai is corrupted. Please, check for all fields.';