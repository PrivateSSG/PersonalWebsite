import { Client, Account, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6533c1336f3a644753c1'); // Replace with your project ID

const database = new Databases(client);
const account = new Account(client);

// Export the client object
export {ID,Databases} from 'appwrite';
