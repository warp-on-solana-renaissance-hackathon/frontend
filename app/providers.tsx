'use client';

import React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet
} from "@rainbow-me/rainbowkit/wallets";
import {
  configureChains,
  createConfig,
  WagmiConfig,
} from "wagmi";
import {
  polygonMumbai,
  sepolia,
  lineaTestnet,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const projectId = "50c21181f1d0c7b44011a168318acdc5";

const {chains, publicClient, webSocketPublicClient} = configureChains(
  [polygonMumbai, sepolia, lineaTestnet],
[publicProvider()]
);

const { wallets } = getDefaultWallets({
  appName: "warp-on-solana-renaissance-hackothon",
  projectId,
  chains,
});

const appInfo = {
  appName: "warp-on-solana-renaissance-hackothon",
}

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const Providers = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={appInfo}
        modalSize="compact"
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default Providers;
