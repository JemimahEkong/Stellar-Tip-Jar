import Header from '../components/Header';
import WalletCard from '../components/WalletCard';
import BalanceCard from '../components/BalanceCard';
import SendTipForm from '../components/SendTipForm';
import TransactionStatus from '../components/TransactionStatus';

export default function Home({
  publicKey,
  error,
  isConnecting,
  onConnect,
  onDisconnect,
  onClearError,
}) {
  return (
    <div className="app">
      <Header />
      <WalletCard
        publicKey={publicKey}
        error={error}
        isConnecting={isConnecting}
        onConnect={onConnect}
        onDisconnect={onDisconnect}
        onClearError={onClearError}
      />
      <BalanceCard />
      <SendTipForm />
      <TransactionStatus />
    </div>
  );
}
