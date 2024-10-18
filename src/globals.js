import ethereumIcon from './assets/Ethereum.svg'; // Ethereum icon
import polygonIcon from './assets/Polygon.svg';  // Polygon icon
import arbitrumIcon from './assets/Arbitrum.svg'; // Arbitrum icon
import avalancheIcon from './assets/Avalanche.svg'; // Avalanche icon
import optimismIcon from './assets/Optimism.svg'; // Optimism icon
import baseIcon from './assets/Base.svg'; // Base icon
import xdcIcon from './assets/XDC.svg'; // XDC icon
import celoIcon from './assets/Celo.svg'

// // For Vault in Mainnet
// // export const VaultAddress = "0x4535B360b4907b44B27cd499e07Ed7772b723deA"; // First deployment
// export const VaultAddress = "0x07a36C630e3F072637da3445Da733B29958D8cAB"; 
// export const AssetAddress = "0x7712c34205737192402172409a8F7ccef8aA2AEc";
// export const AssetName = "BUIDL";
// export const RepresentationTokenName = "sBUIDL";
// export const TargetBlockchainChainId = 1;

// export const walletConnectTargetBlockchainConfig = [{
//   chainId: 1,
//   name: 'Ethereum Mainnet',
//   currency: 'ETH',
//   explorerUrl: 'https://etherscan.io',
//   rpcUrl: 'https://mainnet.infura.io/v3/ac240982f9804e358d1f59fc60a5c451'
// }]

// For Vault in Testnets
export const VaultAddress = "0x602B85F6e27656d2897fF6984896d9af7661939f";
export const AssetAddress = "0x71dB752c6642bb1CeD83c48C43C7A9E003F36AA1";
export const AssetName = "TA AVA";
export const RepresentationTokenName = "szTAAVA";
export const TargetBlockchainChainId = 43113;

export const walletConnectTargetBlockchainConfig = [{
  chainId: 43113,
  name: 'Avalanche Fuji Testnet',
  currency: 'AVAX',
  explorerUrl: 'https://testnet.snowtrace.io',
  rpcUrl: 'https://avalanche-fuji.infura.io/v3/ac240982f9804e358d1f59fc60a5c451'
},
{
  chainId: 44787,
  name: 'Celo Alfajores',
  currency: 'CELO', 
  explorerUrl: 'https://alfajores.celoscan.io/',
  rpcUrl: 'https://alfajores-forno.celo-testnet.org'
},
{
  chainId: 421614,
  name: 'Arbitrum Sepolia',
  currency: 'ETH', 
  explorerUrl: 'https://sepolia.arbiscan.io/',
  rpcUrl: 'https://arbitrum-sepolia.infura.io/v3/ac240982f9804e358d1f59fc60a5c451'
},
]
export const walletConnectMetadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

export const walletConnectProjectId = '9d05d4b1b35fad1c007771dc63f9911d'

// For Bridging
export const SourceAssetAddress = "0xa0e3E3A377522Cb33CdCF9a20918A996C3457e23";
export const TargetAssetAddress = "0xBF84d7D218dD971e9648Ca39F62fE2164656a365";
// export const bridgeContractSourceAddress = "0x8758fE5884BadF6244A06bcaCD92d2f7d4ef10CF";
// export const bridgeContractTargetAddress = "0xa277172C882EAaD8B0606168215cB3c8cFe521AA";
export const bridgeContractSourceAddress = "0xA11e9c666ED79456951807334B290e0ee422D215";
export const bridgeContractTargetAddress = "0x2DBADe2AbFC04aB8a804C5cCDD6a5f0Ba61Db1b5";

export const ERC20Abi = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function balanceOf(address) view returns (uint)',
  'function transfer(address to, uint amount)',
  'function allowance(address owner, address spender) returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'event Transfer(address indexed from, address indexed to, uint amount)'
]

export const VaultABI = [
  'function initialize(string memory _name, string memory _symbol, address _securitizeToken, address _redemptionAddress, address _liquidationToken) external',
  'function changeAdmin(address _newAdmin) external',
  'function isAdmin(address _account) external view returns (bool)',
  'function addRedeemer(address _account) external',
  'function revokeRedeemer(address _account) external',
  'function isRedeemer(address _account) external view returns (bool)',
  'function addLiquidator(address _account) external',
  'function revokeLiquidator(address _account) external',
  'function isLiquidator(address _account) external view returns (bool)',
  'function setLiquidationOpenToPublic(bool _open) external',
  'function deposit(uint256 assets, address receiver) external returns (uint256)',
  'function redeem(uint256 shares, address receiver, address _owner) external returns (uint256)',
  'function liquidate(uint256 shares) external',
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function balanceOf(address) view returns (uint)',
  'function transfer(address to, uint amount)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'event Transfer(address indexed from, address indexed to, uint amount)'
];

// export const BridgeABI = [
//   {
//     "type": "constructor",
//     "inputs": [
//       {
//         "name": "_wormholeRelayer",
//         "type": "address",
//         "internalType": "address"
//       },
//       {
//         "name": "_dsToken",
//         "type": "address",
//         "internalType": "address"
//       }
//     ],
//     "stateMutability": "nonpayable"
//   },
//   {
//     "type": "function",
//     "name": "bridgeAddresses",
//     "inputs": [
//       {
//         "name": "",
//         "type": "uint16",
//         "internalType": "uint16"
//       }
//     ],
//     "outputs": [
//       {
//         "name": "",
//         "type": "address",
//         "internalType": "address"
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "dsToken",
//     "inputs": [],
//     "outputs": [
//       {
//         "name": "",
//         "type": "address",
//         "internalType": "contract IDSToken"
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "latestInvestor",
//     "inputs": [],
//     "outputs": [
//       {
//         "name": "",
//         "type": "string",
//         "internalType": "string"
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "owner",
//     "inputs": [],
//     "outputs": [
//       {
//         "name": "",
//         "type": "address",
//         "internalType": "address"
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "quoteCrossChainDSTokenTransfer",
//     "inputs": [
//       {
//         "name": "targetChain",
//         "type": "uint16",
//         "internalType": "uint16"
//       }
//     ],
//     "outputs": [
//       {
//         "name": "cost",
//         "type": "uint256",
//         "internalType": "uint256"
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "receiveWormholeMessages",
//     "inputs": [
//       {
//         "name": "payload",
//         "type": "bytes",
//         "internalType": "bytes"
//       },
//       {
//         "name": "",
//         "type": "bytes[]",
//         "internalType": "bytes[]"
//       },
//       {
//         "name": "",
//         "type": "bytes32",
//         "internalType": "bytes32"
//       },
//       {
//         "name": "sourceChain",
//         "type": "uint16",
//         "internalType": "uint16"
//       },
//       {
//         "name": "",
//         "type": "bytes32",
//         "internalType": "bytes32"
//       }
//     ],
//     "outputs": [],
//     "stateMutability": "payable"
//   },
//   {
//     "type": "function",
//     "name": "setBridgeAddress",
//     "inputs": [
//       {
//         "name": "chain",
//         "type": "uint16",
//         "internalType": "uint16"
//       },
//       {
//         "name": "bridgeAddress",
//         "type": "address",
//         "internalType": "address"
//       }
//     ],
//     "outputs": [],
//     "stateMutability": "nonpayable"
//   },
//   {
//     "type": "function",
//     "name": "transferDSTokenToChain",
//     "inputs": [
//       {
//         "name": "targetChain",
//         "type": "uint16",
//         "internalType": "uint16"
//       },
//       {
//         "name": "value",
//         "type": "uint256",
//         "internalType": "uint256"
//       }
//     ],
//     "outputs": [],
//     "stateMutability": "payable"
//   },
//   {
//     "type": "function",
//     "name": "wormholeRelayer",
//     "inputs": [],
//     "outputs": [
//       {
//         "name": "",
//         "type": "address",
//         "internalType": "contract IWormholeRelayer"
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "event",
//     "name": "DSTokenReceived",
//     "inputs": [
//       {
//         "name": "senderChain",
//         "type": "uint16",
//         "indexed": false,
//         "internalType": "uint16"
//       },
//       {
//         "name": "dsTokenAddr",
//         "type": "address",
//         "indexed": false,
//         "internalType": "address"
//       },
//       {
//         "name": "from",
//         "type": "address",
//         "indexed": false,
//         "internalType": "address"
//       },
//       {
//         "name": "to",
//         "type": "address",
//         "indexed": false,
//         "internalType": "address"
//       },
//       {
//         "name": "value",
//         "type": "uint256",
//         "indexed": false,
//         "internalType": "uint256"
//       }
//     ],
//     "anonymous": false
//   }
// ];

export const BridgeABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "AddressEmptyCode",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "ERC1967InvalidImplementation",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ERC1967NonPayable",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EnforcedPause",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpectedPause",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FailedInnerCall",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidInitialization",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotInitializing",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UUPSUnauthorizedCallContext",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "slot",
          "type": "bytes32"
        }
      ],
      "name": "UUPSUnsupportedProxiableUUID",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "chainId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "bridgeAddress",
          "type": "address"
        }
      ],
      "name": "BridgeAddressAdd",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "chainId",
          "type": "uint16"
        }
      ],
      "name": "BridgeAddressRemove",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "sourceChainId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "dsToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "investorWallet",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "DSTokenBridgeReceive",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "targetChainId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "dsToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "investorWallet",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "DSTokenBridgeSend",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "version",
          "type": "uint64"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "GAS_LIMIT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "UPGRADE_INTERFACE_VERSION",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "name": "bridgeAddresses",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "targetChain",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "bridgeDSTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dsServiceConsumer",
      "outputs": [
        {
          "internalType": "contract IDSServiceConsumer",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dsToken",
      "outputs": [
        {
          "internalType": "contract IDSToken",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getImplementationAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getInitializedVersion",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_whChainId",
          "type": "uint16"
        },
        {
          "internalType": "address",
          "name": "_wormholeRelayer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_dsToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "proxiableUUID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "targetChain",
          "type": "uint16"
        }
      ],
      "name": "quoteBridge",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "cost",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "payload",
          "type": "bytes"
        },
        {
          "internalType": "bytes[]",
          "name": "",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes32",
          "name": "sourceBridge",
          "type": "bytes32"
        },
        {
          "internalType": "uint16",
          "name": "sourceChain",
          "type": "uint16"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "receiveWormholeMessages",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "chainId",
          "type": "uint16"
        }
      ],
      "name": "removeBridgeAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "chainId",
          "type": "uint16"
        },
        {
          "internalType": "address",
          "name": "bridgeAddress",
          "type": "address"
        }
      ],
      "name": "setBridgeAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "whChainId",
      "outputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "wormholeRelayer",
      "outputs": [
        {
          "internalType": "contract IWormholeRelayer",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  
];

export const blockchainInfo = {
  // Ethereum Mainnet and Sepolia Testnet
  ethereum: {
    name: "Ethereum",
    chainId: 1,
    rpcUrl: "https://mainnet.infura.io/v3/ac240982f9804e358d1f59fc60a5c451", // Replace with your RPC URL
    icon: ethereumIcon, // Variable representing the Ethereum icon
  },
  ethereumSepolia: {
    name: "Ethereum Sepolia",
    chainId: 11155111,
    rpcUrl: "https://sepolia.infura.io/v3/ac240982f9804e358d1f59fc60a5c451",
    icon: ethereumIcon, // Same variable for Sepolia testnet
  },

  // Polygon Mainnet and Mumbai Testnet
  polygon: {
    name: "Polygon",
    chainId: 137,
    rpcUrl: "https://polygon-mainnet.infura.io/v3/ac240982f9804e358d1f59fc60a5c451",
    icon: polygonIcon, // Variable representing the Polygon icon
  },
  polygonAmoy: {
    name: "Polygon Amoy",
    chainId: 80001,
    rpcUrl: "https://polygon.drpc.org/",
    icon: polygonIcon, // Same variable for Mumbai testnet
  },

  // Arbitrum Mainnet and Goerli Testnet
  arbitrum: {
    name: "Arbitrum",
    chainId: 42161,
    rpcUrl: "https://arbitrum-mainnet.infura.io/v3/ac240982f9804e358d1f59fc60a5c451",
    icon: arbitrumIcon, // Variable representing the Arbitrum icon
  },
  arbitrumSepolia: {
    name: "Arbitrum Sepolia",
    chainId: 421614,
    rpcUrl: "https://arbitrum-sepolia.infura.io/v3/ac240982f9804e358d1f59fc60a5c451",
    icon: arbitrumIcon, // Same variable for Sepolia testnet
    wormholeChainId: 10003,
    bridgeContractAddress: "0x9281F9c872803cb6C5A3576dFba7210F23Ce24E4",
    assets: [
      {
        address: "0x01695B0b5087597a85A4AB6bE0054f0Bd7c5312A",
        name: "TBAR",
        symbol: "TBAR",
        icon: "https://s3.us-east-2.amazonaws.com/sandbox-public-files/perm/8202afe0-3a3c-4bd4-a8fc-53396b1e176d/8c897c59-58ee-4f41-8ca0-c2e080704539-token-icon"
      },
    ]
  },

  // Avalanche Mainnet and Fuji Testnet
  avalanche: {
    name: "Avalanche",
    chainId: 43114,
    rpcUrl: "https://avalanche-mainnet.infura.io/v3/ac240982f9804e358d1f59fc60a5c451",
    icon: avalancheIcon, // Variable representing the Avalanche icon
  },
  avalancheFuji: {
    name: "Avalanche Fuji",
    chainId: 43113,
    rpcUrl: "https://avalanche-fuji.infura.io/v3/ac240982f9804e358d1f59fc60a5c451",
    icon: avalancheIcon, // Same variable for Fuji testnet
    wormholeChainId: 6,
    // bridgeContractAddress: "0xA11e9c666ED79456951807334B290e0ee422D215",
    bridgeContractAddress: "0x9281F9c872803cb6C5A3576dFba7210F23Ce24E4",
    assets: [
      {
        address: "0xdAD351E06D689f4A48F3033e2Ddcd3474ef89E8b",
        name: "TBAV",
        symbol: "TBAV",
        icon: "https://s3.us-east-2.amazonaws.com/sandbox-public-files/perm/8202afe0-3a3c-4bd4-a8fc-53396b1e176d/8c897c59-58ee-4f41-8ca0-c2e080704539-token-icon"
      },
      {
        address: "0xa0e3E3A377522Cb33CdCF9a20918A996C3457e23",
        name: "AUG9",
        symbol: "AUG9",
        icon: "https://s3.us-east-2.amazonaws.com/sandbox-public-files/perm/8202afe0-3a3c-4bd4-a8fc-53396b1e176d/8c897c59-58ee-4f41-8ca0-c2e080704539-token-icon"
      },
    ]
  },

  // Optimism Mainnet and Goerli Testnet
  optimism: {
    name: "Optimism",
    chainId: 10,
    rpcUrl: "https://optimism-mainnet.infura.io/v3/ac240982f9804e358d1f59fc60a5c451",
    icon: optimismIcon, // Variable representing the Optimism icon
  },
  optimismSepolia: {
    name: "Optimism Sepolia",
    chainId: 420,
    rpcUrl: "https://optimism-sepolia.infura.io/v3/ac240982f9804e358d1f59fc60a5c451",
    icon: optimismIcon, // Same variable for Sepolia testnet
  },

  // Base Mainnet and Goerli Testnet
  base: {
    name: "Base",
    chainId: 8453,
    rpcUrl: "https://mainnet.base.org",
    icon: baseIcon, // Variable representing the Base icon
  },
  baseGoerli: {
    name: "Base Goerli Testnet",
    chainId: 84531,
    rpcUrl: "https://goerli.base.org",
    icon: baseIcon, // Same variable for Goerli testnet
  },

  // XDC Mainnet and Apothem Testnet
  xdc: {
    name: "XDC Network",
    chainId: 50,
    rpcUrl: "https://rpc.xinfin.network",
    icon: xdcIcon, // Variable representing the XDC icon
  },
  xdcApothem: {
    name: "XDC Apothem Testnet",
    chainId: 51,
    rpcUrl: "https://rpc.apothem.network",
    icon: xdcIcon, // Same variable for Apothem testnet
  },

  // Celo Mainnet and Alfajores Testnet
  celo: {
    name: "Celo",
    chainId: 42220,
    rpcUrl: "https://forno.celo.org",
    icon: celoIcon, // Variable representing the Celo icon
  },
  celoAlfajores: {
    name: "Celo Alfajores",
    chainId: 44787,
    rpcUrl: "https://alfajores-forno.celo-testnet.org",
    icon: celoIcon, // Same variable for Celo Alfajores testnet
    wormholeChainId: 14,
    // bridgeContractAddress: "0x2DBADe2AbFC04aB8a804C5cCDD6a5f0Ba61Db1b5",
    assets: [
      {
        address: "0xBF84d7D218dD971e9648Ca39F62fE2164656a365",
        name: "AUG9",
        symbol: "AUG9",
        icon: "https://s3.us-east-2.amazonaws.com/sandbox-public-files/perm/8202afe0-3a3c-4bd4-a8fc-53396b1e176d/8c897c59-58ee-4f41-8ca0-c2e080704539-token-icon"
      },
    ]
  },
  


};
