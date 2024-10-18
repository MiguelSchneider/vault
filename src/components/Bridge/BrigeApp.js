import React, { useEffect, useState } from 'react';
import { IconButton, Box, Button, Snackbar, Alert, CircularProgress, Container, Paper } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import CryptoInput from './components/CryptoInput';
import { useWeb3ModalProvider, useWeb3ModalAccount, useDisconnect } from '@web3modal/ethers/react';

import { useSwitchNetwork } from '@web3modal/ethers/react';
import { ethers, Contract } from 'ethers';
import {
    ERC20Abi,
    BridgeABI,
    blockchainInfo
} from '../../globals';
import WalletDisplay from '../../utils/WalletDisplay';
import Bridge from './components/Bridge';

const BridgeApp = ({ network1, network2 }) => {
    const { address} = useWeb3ModalAccount();
    const { disconnect } = useDisconnect();

    // Bridge styles for common UI consistency
    const bridgeStyles = {
        Appcontainer: {
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            // backgroundColor: '#dadada',
            borderRadius: 0,
            // width: '100%',
            //margin: 'auto',
            gap: '1em',
            // maxWidth: '800px',
            paddingBottom:'2em'
        },
    };

    return (

        <Paper sx={bridgeStyles.Appcontainer}>
            <Box display="flex" justifyContent="space-between" alignItems="center" backgroundColor="#dadada" paddingLeft='1em' >
                <h1 color='#727272'> Bridge </h1>
                <Box display="flex" justifyContent="flex-end" alignItems="center" >
                    <WalletDisplay address={address} disconnect={disconnect} />
                </Box>
            </Box>
            <Bridge network1={network1} network2={network2} />
        </Paper>
    );
};

export default BridgeApp;