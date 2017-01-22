import reduce from 'lodash/reduce';
import isEmpty from 'lodash/isEmpty';
import values from 'lodash/values';
import keys from 'lodash/keys';

// TODO: Add documentation
export function extractIntents(intentsToExtract, intentsList) {
    return reduce(intentsToExtract, (acc, minConfidence, intentName) => {
        const intent = intentsList[intentName];

        if (!isEmpty(intent)) {
            intent.forEach(({ confidence, value }) => {
                if (minConfidence <= confidence) {
                    acc[intentName] = value;
                }
            });
        }

        return acc;
    }, {});
}

export function intentsValuesSelector(intents) {
    return values(intents);
}

export function intentsKeysSelector(intents) {
    return keys(intents);
}