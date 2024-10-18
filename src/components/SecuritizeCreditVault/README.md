
# VaultTransaction Component

## Overview

The `VaultTransaction` component is a React component that enables users to interact with a Vault contract on the Avalanche Fuji Testnet. The component allows users to deposit or redeem assets within the vault. Additionally, there are admin-specific functionalities for adding redeemers and changing the vault admin, which are conditionally displayed based on the user's admin status.

## Installation

To use the `VaultTransaction` component in your project, follow these steps:

### 1. Install dependencies
Ensure you have the required dependencies in your project. You can install them using npm or yarn.

```bash
npm install @mui/material @web3modal/ethers react ethers
```

### 2. Import and Use the Component
Import the `VaultTransaction` component and other related components (`AddRedeemer`, `ChangeAdmin`) into your React application.

```javascript
import VaultTransaction from './components/VaultTransaction';
import AddRedeemer from './components/AddRedeemer';
import ChangeAdmin from './components/ChangeAdmin';
```

### 3. Ensure Global Variables
Ensure you have the global variables defined in `globals.js` correctly set up, as these are critical for the component's functionality.

```javascript
import { VaultAddress, AssetAddress, VaultABI, ERC20Abi, AssetName, RepresentationTokenName } from '../globals';
```

## Component Structure

- **VaultTransaction**:
  - Allows users to deposit or redeem assets within a vault.
  - Includes validation, transaction status tracking, and feedback via snackbars.
  
- **Admin Functionality**:
  - `AddRedeemer`: Allows an admin to add new redeemers.
  - `ChangeAdmin`: Allows an admin to change the vault admin.
  - These components are conditionally rendered based on the user's admin status.

## Usage

Here is an example of how to use the `VaultTransaction` component in a React application:

```javascript
import React from 'react';
import { Container } from '@mui/material';
import VaultTransaction from './components/VaultTransaction';
import AddRedeemer from './components/AddRedeemer';
import ChangeAdmin from './components/ChangeAdmin';

function App() {
    return (
        <Container>
            <VaultTransaction />
            <AddRedeemer />
            <ChangeAdmin />
        </Container>
    );
}

export default App;
```

## globals.js Clarifications and Comments

The `globals.js` file contains important constants and configurations used throughout the application, particularly for interacting with the blockchain and smart contracts.

```javascript
// Address of the Vault contract deployed on the Avalanche Fuji Testnet.
// This address is where the main Vault smart contract resides.
export const VaultAddress = "0x602B85F6e27656d2897fF6984896d9af7661939f";

// Address of the Asset contract on the Avalanche Fuji Testnet.
// This represents the ERC20 token contract that users can deposit into the vault.
export const AssetAddress = "0x71dB752c6642bb1CeD83c48C43C7A9E003F36AA1";

// The name of the asset token (ERC20) used within the application.
export const AssetName = "TA AVA";

// The name of the representation token received after depositing assets in the vault.
export const RepresentationTokenName = "szTAAVA";

// The Chain ID of the Avalanche Fuji Testnet.
// This is the unique identifier for the Avalanche Fuji Testnet.
export const TargetBlockchainChainId = 43113;

// WalletConnect Project ID used for connecting to the blockchain via WalletConnect.
export const walletConnectProjectId = '9d05d4b1b35fad1c007771dc63f9911d';

// Configuration for connecting to the Avalanche Fuji Testnet using WalletConnect.
export const walletConnectTargetBlockchainConfig = {
  chainId: 43113, // Chain ID for Avalanche Fuji Testnet
  name: 'Avalanche Fuji Testnet', // Name of the network
  currency: 'AVAX', // Native currency of the network
  explorerUrl: 'https://testnet.snowtrace.io', // Explorer URL for viewing transactions and contracts
  rpcUrl: 'https://avalanche-fuji.infura.io/v3/ac240982f9804e358d1f59fc60a5c451' // RPC URL for connecting to the network
};

// Metadata for WalletConnect.
// This includes the name, description, URL, and icon for the application.
// Ensure that the URL and icons match your domain to avoid issues during the connection.
export const walletConnectMetadata = {
  name: 'My Website', // Name of your website/application
  description: 'My Website description', // A brief description of your website/application
  url: 'https://mywebsite.com', // The URL of your website/application
  icons: ['https://avatars.mywebsite.com/'] // URL to the icon used in the WalletConnect modal
};

// ERC20Abi contains the necessary methods to interact with an ERC20 token contract.
// This ABI includes methods to get the name, symbol, balance, transfer tokens, approve spending, and check allowances.
export const ERC20Abi = [
    'function name() view returns (string)', // Gets the name of the token
    'function symbol() view returns (string)', // Gets the symbol of the token
    'function balanceOf(address) view returns (uint)', // Gets the balance of a specific address
    'function transfer(address to, uint amount)', // Transfers tokens to a specific address
    'function allowance(address owner, address spender) returns (uint256)', // Gets the amount of tokens that an owner allowed to a spender
    'function approve(address spender, uint256 amount) returns (bool)', // Approves the spender to spend a specific amount of tokens
    'event Transfer(address indexed from, address indexed to, uint amount)' // Event emitted when tokens are transferred
];

// VaultABI contains the methods and events necessary for interacting with the Vault contract.
// This ABI includes functions for managing admins, redeemers, liquidators, and performing deposit and redemption actions.
export const VaultABI = [
    'function initialize(string memory _name, string memory _symbol, address _securitizeToken, address _redemptionAddress, address _liquidationToken) external', // Initializes the vault with specific parameters
    'function changeAdmin(address _newAdmin) external', // Changes the admin of the vault
    'function isAdmin(address _account) external view returns (bool)', // Checks if a specific account is an admin
    'function addRedeemer(address _account) external', // Adds a new redeemer to the vault
    'function revokeRedeemer(address _account) external', // Revokes a redeemer from the vault
    'function isRedeemer(address _account) external view returns (bool)', // Checks if a specific account is a redeemer
    'function addLiquidator(address _account) external', // Adds a new liquidator to the vault
    'function revokeLiquidator(address _account) external', // Revokes a liquidator from the vault
    'function isLiquidator(address _account) external view returns (bool)', // Checks if a specific account is a liquidator
    'function setLiquidationOpenToPublic(bool _open) external', // Sets whether liquidation is open to the public
    'function deposit(uint256 assets, address receiver) external returns (uint256)', // Deposits assets into the vault
    'function redeem(uint256 shares, address receiver, address _owner) external returns (uint256)', // Redeems shares from the vault
    'function liquidate(uint256 shares) external', // Liquidates shares in the vault
    'function name() view returns (string)', // Gets the name of the vault
    'function symbol() view returns (string)', // Gets the symbol of the vault
    'function balanceOf(address) view returns (uint)', // Gets the balance of a specific address in the vault
    'function transfer(address to, uint amount)', // Transfers vault shares to a specific address
    'function approve(address spender, uint256 amount) returns (bool)', // Approves the spender to spend a specific amount of vault shares
    'event Transfer(address indexed from, address indexed to, uint amount)' // Event emitted when shares are transferred
];
