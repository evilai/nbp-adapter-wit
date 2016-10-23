import getItem from 'lodash/get';

const ERROR_WIT_NORMALIZER_DATA_CORRUPTED = 'Data, coming from wit.ai is corrupted. Please, check for all fields.';

export default function(result) {
    const entities = getItem(result, 'body.entities');
    if (!entities) {
        throw new Error(ERROR_WIT_NORMALIZER_DATA_CORRUPTED);
    }

    return entities;
}
