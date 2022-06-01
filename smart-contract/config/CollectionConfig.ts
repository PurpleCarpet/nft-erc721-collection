import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'PCProofofConcept',
  tokenName: 'PC: Proof of Concept',
  tokenSymbol: 'PCPOC',
  hiddenMetadataUri: 'ipfs://Qmd9xiHUyvbZ77ycw6A6aJM9Yxq8SjFA5LAYjqNPm671Hs/hidden.json',
  maxSupply: 33,
  whitelistSale: {
    price: 0.0,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.0,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.0069,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x4981c75143C7C32463def873226511dE4F483c96",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;