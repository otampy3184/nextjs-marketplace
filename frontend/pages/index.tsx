import Link from 'next/link'
import Layout from '../components/Layout'
import { Button } from "@mui/material";

interface Window {
  ethereum: any;  // 苦肉の策
}

interface WalletProps {
  currentAccount: string;
  // setterAccount: (account: string) => void;
  setCurrentAccount: (value: React.SetStateAction<string>) => void
}

function connectWallet( ) { 
  const requestEthAccounts = async () => {
    let window : Window
    const { ethereum } = window.ethereum;
    if (!ethereum) throw new Error("error");
    const accouts: string = await ethereum.request({ method: "eth_requestAccounts"});
    if (accouts.length === 0) throw new Error("error");
    const accout = accouts[0];
    console.log(accout);
  }
}

const IndexPage = () => (
  <Button variant="contained" color="primary" onClick={connectWallet}>
    Connect Wallet
  </Button>
)

export default IndexPage
