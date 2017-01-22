import pick from 'lodash/pick';
import noop from 'lodash/noop';
import superagent from 'superagent';
import { OK } from 'http-status';

import normalizer from './normalizer';

const LOG_REQUEST_FIELDS = ['method', 'url', 'qs', 'header'];

export default function({ token, version, logger = { info: noop, error: noop } }) {
    return {
        send: query => superagent
            .get(`https://api.wit.ai/message?v=${version}`)
            .query({ q: query })
            .set('Authorization', `Bearer ${token}`)
            .use(request => {
                logger.info('Request  -->', pick(request, LOG_REQUEST_FIELDS));
                return request;
            })
            .then(result => {
                if (result.status === OK) {
                    logger.info('Response <--', result.body);
                } else {
                    logger.error(result.error);
                }

                return result;
            }, error => {
                logger.error(error);
            })
            .then(normalizer)
    };
};
