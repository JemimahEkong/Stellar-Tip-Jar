import Header from '../components/Header';
import WalletCard from '../components/WalletCard';
import BalanceCard from '../components/BalanceCard';
import SendTipForm from '../components/SendTipForm';
import TransactionStatus from '../components/TransactionStatus';

export default function Home() {
  return (
    <div className="app">
      <Header />
      <WalletCard />
      <BalanceCard />
      <SendTipForm />
      <TransactionStatus />
    </div>
  );
}
