'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractIntents = extractIntents;
exports.intentsValuesSelector = intentsValuesSelector;
exports.intentsKeysSelector = intentsKeysSelector;

var _reduce = require('lodash/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _values = require('lodash/values');

var _values2 = _interopRequireDefault(_values);

var _keys = require('lodash/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add documentation
function extractIntents(intentsToExtract, intentsList) {
    return (0, _reduce2.default)(intentsToExtract, function (acc, minConfidence, intentName) {
        var intent = intentsList[intentName];

        if (!(0, _isEmpty2.default)(intent)) {
            intent.forEach(function (_ref) {
                var confidence = _ref.confidence;
                var value = _ref.value;

                if (minConfidence <= confidence) {
                    acc[intentName] = value;
                }
            });
        }

        return acc;
    }, {});
}

function intentsValuesSelector(intents) {
    return (0, _values2.default)(intents);
}

function intentsKeysSelector(intents) {
    return (0, _keys2.default)(intents);
}