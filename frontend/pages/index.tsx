import Link from 'next/link'
import Layout from '../components/Layout'
import { Button } from "@mui/material";

interface WalletProps {
  currentAccount: string;
  // setterAccount: (account: string) => void;
  setCurrentAccount: (value: React.SetStateAction<string>) => void
}

function connectWallet() { 
  const requestEthAccounts = async () => {
    if ((window as any).ethereum) console.log("ethereum not found")
    const accouts: string = await (window as any).ethereum.request({ method: "eth_requestAccounts"});
    if (accouts.length === 0) console.log("account not found")
    const accout = accouts[0];
    console.log(accout);
  }
  requestEthAccounts()
}

const IndexPage = () => (
  <Button variant="contained" color="primary" onClick={connectWallet}>
    Connect Wallet
  </Button>
)

export default IndexPage
