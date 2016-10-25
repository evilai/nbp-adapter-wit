## Wit.ai adapter
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

## Tunneling
Check `tunneling.js`. To bind context of all client's function we need to perform tunneling on each request, so inside skills you can do `wit.send('Some text)` without specifying application tokens.

Look at [router-builder.js](https://github.com/evilai/nodejs-bot-platform/blob/master/src/bot/platforms/messenger/bot-name/router-builder.js) as an example.