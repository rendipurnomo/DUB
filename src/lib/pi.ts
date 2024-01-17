import PiNetwork from 'pi-backend';

// DO NOT expose these values to public
const apiKey = process.env.PI_API_KEY!;
const walletPrivateSeed = process.env.S_WALLET_PRIVATE_SEED!; // starts with S
export const pi = new PiNetwork(apiKey, walletPrivateSeed);
