export default function WalletCard() {
  return (
    <section className="card wallet-card">
      <span className="wallet-card__label">Wallet</span>
      <div className="wallet-card__address">No wallet connected</div>
      <button className="btn btn--primary btn--full" type="button">
        Connect Wallet
      </button>
    </section>
  );
}
