'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var token = _ref.token;
    var version = _ref.version;
    var _ref$logger = _ref.logger;
    var logger = _ref$logger === undefined ? { info: _noop2.default, error: _noop2.default } : _ref$logger;

    return {
        send: function send(query) {
            return _superagent2.default.get('https://api.wit.ai/message?v=' + version).query({ q: query }).set('Authorization', 'Bearer ' + token).use(function (request) {
                logger.info('Request  -->', (0, _pick2.default)(request, LOG_REQUEST_FIELDS));
                return request;
            }).then(function (result) {
                if (result.status === _httpStatus.OK) {
                    logger.info('Response <--', result.body);
                } else {
                    logger.error(result.error);
                }

                return result;
            }, function (error) {
                logger.error(error);
            }).then(_normalizer2.default);
        }
    };
};

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _httpStatus = require('http-status');

var _normalizer = require('./normalizer');

var _normalizer2 = _interopRequireDefault(_normalizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOG_REQUEST_FIELDS = ['method', 'url', 'qs', 'header'];

;