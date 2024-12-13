import type { AppProps } from "next/app";
import { ThirdwebProvider, embeddedWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ACCOUNT_FACTORY_ADDRESS } from "../constants/constants";
import Image from "next/image"; // Import Image component from Next.js
import thirdwebLogo from "../public/payxn-logo.png"; // Adjust the path as needed

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "binance-testnet";

const smartWalletConfig = {
  factoryAddress: ACCOUNT_FACTORY_ADDRESS,
  gasless: true,
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        smartWallet(embeddedWallet(), smartWalletConfig),
      ]}
    >

    {/* Add the image */}
    <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Image src={thirdwebLogo} alt="Thirdweb Logo" width={240} height={80} />
    </div>

      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
