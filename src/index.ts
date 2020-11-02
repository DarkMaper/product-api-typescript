import 'dotenv/config';
import App from './server';

/**
 * Main function
 */

async function main() {
    const app = new App();
    app.listen();
}
main();