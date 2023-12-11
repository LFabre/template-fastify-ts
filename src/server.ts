import {app} from './app';
import {config} from './config';

app.listen({port: config.server.port}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
