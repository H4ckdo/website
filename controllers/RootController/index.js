const environment = process.env.NODE_ENV;
const path = require('path');
/**
 * @class RootController
 * @param  {type} req {description}
 * @param  {type} res {description}
 * @return {type} {description}
 */
class RootController {
  sw(req, res) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    debugger;
    res.sendFile(path.resolve(__dirname, '../RootController/../../client/sw.js'));
  }

  main(req, res) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.render('index', { environment, publicServerKey })
  }

  async suscribe(req, res) {
    let subscription = req.body;
    debugger;
    const notification = JSON.stringify({
      title: 'Notificaciones Activadas',
      body: 'Recibiras notificaciones pronto :)'
    });
    let { keys, endpoint = '' } = subscription;
    let { auth = '', p256dh = '' } = keys;
    let { ok, error, result } = await surePromise(
      Notifications.create({ auth, p256dh, endpoint })
    )
    debugger;
    if (ok) {
      let notificationResult = await surePromise(
        webpush.sendNotification(subscription, notification)
      )
      debugger;
      if (notificationResult.ok) return res.json(notificationResult.result);
      debugger;
      res.json(notificationResult.error);
    } else {
      debugger;
      res.json(error);
    }
  }
}

module.exports = RootController;

