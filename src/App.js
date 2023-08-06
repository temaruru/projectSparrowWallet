import styles from './App.module.css';
import {
  Start,
  Import,
  MnemonicWords,
  ImportSettings,
  CreateWallet,
  RecoveryWords,
  ConfirmRecoveryWords,
  Main,
  Send,
  Receive,
  Whirlpool,
  Whirlpool2,
  Whirlpool3,
  Whirlpool4,
  Settings,
  ConnectedSites,
  Scan,
  Theme,
  Notification,
  Rpc,
  Utxo,
  Utxos,
  Loading,
  AddPassword,
  Language,
  Currency,
  Sound, Timer, Protection, Threshold,
} from './pages/index';

function App() {
  return (
    <div className={styles.screens}>
      <div className={styles.screen}>
        <Loading />
      </div>
      <div className={styles.screen}>
        <Start />
      </div>
      <div className={styles.screen}>
        <Import />
      </div>
      <div className={styles.screen}>
        <MnemonicWords />
      </div>
      <div className={styles.screen}>
        <ImportSettings />
      </div>
      <div className={styles.screen}>
        <CreateWallet />
      </div>
      <div className={styles.screen}>
        <RecoveryWords />
      </div>
      <div className={styles.screen}>
        <ConfirmRecoveryWords />
      </div>
      <div className={styles.screen}>
        <AddPassword />
      </div>
      <div className={styles.screen}>
        <Main />
      </div>
      <div className={styles.screen}>
        <Send />
      </div>
      <div className={styles.screen}>
        <Receive />
      </div>
      <div className={styles.screen}>
        <Whirlpool />
      </div>
      <div className={styles.screen}>
        <Whirlpool2 />
      </div>
      <div className={styles.screen}>
        <Whirlpool3 />
      </div>
      <div className={styles.screen}>
        <Whirlpool4 />
      </div>
      <div className={styles.screen}>
        <Settings />
      </div>
      <div className={styles.screen}>
        <ConnectedSites />
      </div>
      <div className={styles.screen}>
        <Scan />
      </div>
      <div className={styles.screen}>
        <Theme />
      </div>
      <div className={styles.screen}>
        <Language />
      </div>
      <div className={styles.screen}>
        <Currency />
      </div>
      <div className={styles.screen}>
        <Sound />
      </div>
      <div className={styles.screen}>
        <Timer />
      </div>
      <div className={styles.screen}>
        <Protection />
      </div>
      <div className={styles.screen}>
        <Notification />
      </div>
      <div className={styles.screen}>
        <Threshold />
      </div>
      <div className={styles.screen}>
        <Rpc />
      </div>
      <div className={styles.screen}>
        <Utxo />
      </div>
      <div className={styles.screen}>
        <Utxos />
      </div>
    </div>
  );
}

export default App;
