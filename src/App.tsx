import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { networks } from "./networks";
import { isAfterBlockNumber } from "./opcodeExample";

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);

  const connectWalletHandler = async () => {
    // @ts-ignore
    const { ethereum } = window;

    if (!ethereum) {
      console.log("No Web3 Wallet installed");
    }

    try {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
        chainId: networks[0].config.chainId,
      });
      console.log(`Address ${accounts[0]} connected`);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  }

  const runOpcodesExample = async () => {
    // @ts-ignore
    const { ethereum } = window;

    if (!ethereum) {
      console.log("No Web3 Wallet installed");
    }

    try {
      // const accounts = await ethereum.request({
      //   method: 'eth_requestAccounts',
      //   chainId: networks[0].config.chainId,
      // });
      // console.log(`Address ${accounts[0]} connected`);
      // setCurrentAccount(accounts[0]);

      // TODO ADD FUNCTIONALITY FOR CALLING THE SMART CONTRACT WITH THE OPCODE

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectWalletHandler}>
          Connect
        </button>

        <button onClick={runOpcodesExample}>
          Run Opcodes Example
        </button>
      </header>
    </div>
  );
}

export default App;
