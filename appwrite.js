import { Client, Account,Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6533c1336f3a644753c1');
export const account = new Account(client);
export const databases =  new Databases(client)
export { ID } from 'appwrite';
