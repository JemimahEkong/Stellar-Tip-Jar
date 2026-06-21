import { useState, useCallback } from 'react';
import Home from './pages/Home';
import { connectWallet, disconnectWallet } from './services/stellar';

export default function App() {
  const [publicKey, setPublicKey] = useState(null);
  const [error, setError] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = useCallback(async () => {
    setError(null);
    setIsConnecting(true);
    try {
      const key = await connectWallet();
      setPublicKey(key);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const handleDisconnect = useCallback(() => {
    disconnectWallet();
    setPublicKey(null);
    setError(null);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return (
    <Home
      publicKey={publicKey}
      error={error}
      isConnecting={isConnecting}
      onConnect={handleConnect}
      onDisconnect={handleDisconnect}
      onClearError={clearError}
    />
  );
}
