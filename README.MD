# Wit.ai adapter
This is a Wit.ai adapter for Node.js Bot Platform. It can get intents and entities from your Wit.ai application.

```js
import witAdapterFactory from 'nbp-adapter-wit';
const wit = witAdapterFactory({
    token: 'your-wit-app-token',
    version: 'api-version',
    logger // instance of your logging tool
});

const result = yield wit.send('Your sentence here');
```

Please, look at [usage example](https://github.com/evilai/nodejs-bot-platform/blob/master/src/bot/skills/clusters/core/intents.js).