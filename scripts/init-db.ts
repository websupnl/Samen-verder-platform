import * as dotenv from 'dotenv';
import { initializeDatabase } from '../src/lib/db';

dotenv.config({ path: '.env.local' });

async function main() {
  try {
    await initializeDatabase();
    process.exit(0);
  } catch (error) {
    console.error('Initialization failed');
    process.exit(1);
  }
}

main();
