import { isConnected, requestAccess } from '@stellar/freighter-api';

export function isFreighterInstalled() {
  return isConnected();
}

export async function connectWallet() {
  const installed = await isConnected();
  if (!installed) {
    throw new Error(
      'Freighter Wallet is not installed. Please install the Freighter browser extension to continue.',
    );
  }

  try {
    const publicKey = await requestAccess();
    if (!publicKey) {
      throw new Error('Wallet connection was rejected.');
    }
    return publicKey;
  } catch (err) {
    if (err.message?.includes('rejected') || err.message?.includes('denied')) {
      throw new Error('Wallet connection was rejected.');
    }
    throw new Error('An unexpected error occurred while connecting to Freighter.');
  }
}

export function disconnectWallet() {
  return;
}

export function shortenAddress(address) {
  if (!address || address.length < 10) return address;
  return `${address.slice(0, 5)}...${address.slice(-4)}`;
}
