import { shortenAddress } from '../services/stellar';

export default function WalletCard({
  publicKey,
  error,
  isConnecting,
  onConnect,
  onDisconnect,
  onClearError,
}) {
  return (
    <section className="card wallet-card">
      <span className="wallet-card__label">Wallet</span>

      {publicKey ? (
        <>
          <div className="wallet-card__address wallet-card__address--connected">
            {shortenAddress(publicKey)}
          </div>
          <button
            className="btn btn--secondary btn--full"
            type="button"
            onClick={onDisconnect}
          >
            Disconnect
          </button>
        </>
      ) : (
        <>
          <div className="wallet-card__address">No wallet connected</div>
          <button
            className="btn btn--primary btn--full"
            type="button"
            disabled={isConnecting}
            onClick={onConnect}
          >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        </>
      )}

      {error && (
        <div className="wallet-card__error">
          <span>{error}</span>
          <button
            className="wallet-card__error-close"
            type="button"
            onClick={onClearError}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}
