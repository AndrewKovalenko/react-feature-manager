import launchdarklyClient from 'ldclient-js';

const CLIENT_READY = 'ready';

export default async function connect({
  id, user, options = {
    hideUserData: true
  }
}) {
  const clientInitPromise = new Promise((resolve) => {
    launchdarklyClient.initialize(id, user, options);
    launchdarklyClient.on(CLIENT_READY, () => {
      resolve(launchdarklyClient);
    });

    return clientInitPromise;
  });
}
