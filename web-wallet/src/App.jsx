import { useState } from 'react'
import { generateMnemonic } from 'bip39';
import './App.css'
import { SolanaWallet } from './SolanaWallet.jsx'
import { EthWallet } from './EthWallet.jsx';

function App() {

  const [mnemonic, setMnemonic] = useState('');

  const mnemonicGenerate = async() => {
    const phrase = generateMnemonic();
    setMnemonic(phrase);
  }

  return (
    <>
      <div>
        <p>{mnemonic}</p>
      </div>
      <button onClick={mnemonicGenerate}>Generate Seed Phrase</button>
      {<SolanaWallet mnemonic = {mnemonic} />}
      {<EthWallet mnemonic={mnemonic} />}
    </>
  )
}

export default App
