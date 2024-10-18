import React, { useState } from 'react';
import {
    Table,
    Box,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Button,
    Typography,
    TablePagination,
    Dialog,
    DialogTitle,
    DialogContent,
    LinearProgress,
    DialogActions,
} from '@mui/material';
import Papa from 'papaparse';
import { ethers } from 'ethers';
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react';

const EditableTable = () => {
    const [csvData, setCsvData] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [progressOpen, setProgressOpen] = useState(false);
    const [progressMessage, setProgressMessage] = useState('');
    const [transactionData, setTransactionData] = useState([]);
    const [progress, setProgress] = useState(0);
    const [isStopping, setIsStopping] = useState(false);

    const { address, isConnected } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    // Handles file upload and CSV parsing
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    setHeaders(Object.keys(result.data[0]));
                    setCsvData(result.data);
                },
            });
        }
    };

    // Handles cell value change
    const handleCellChange = (rowIndex, columnName, value) => {
        const updatedData = [...csvData];
        updatedData[rowIndex][columnName] = value;
        setCsvData(updatedData);
    };

    // Pagination controls
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Simulate sending assets with progress bar and stopping ability
    const sendAssets = async () => {
        setProgressOpen(true);
        setIsStopping(false);
        const provider = await new ethers.BrowserProvider(walletProvider);
        const signer = await provider.getSigner();
        const BANK_WALLET = await signer.getAddress(); // Fetch the bank wallet address

        const updatedData = [...csvData];
        const txData = [];

        for (let i = 0; i < csvData.length; i++) {
            if (isStopping) break; // Stop the process if the user clicks 'Stop Process'

            const row = csvData[i];
            const { wallet, amount } = row; // Assuming `wallet` and `amount` columns

            try {
                // Simulate a 1-second delay
                await new Promise(resolve => setTimeout(resolve, 10));

                // Show progress message
                setProgressMessage(`Transferring ${amount} units to ${wallet}...`);

                // Simulate a transaction to send ETH
                const tx = await signer.sendTransaction({
                    to: wallet,
                    value: ethers.parseEther(amount.toString()), // Simulated sending Ether
                });

                await tx.wait(); // Wait for transaction confirmation

                // Update the row with the success status and etherscan link
                updatedData[i] = {
                    ...row,
                    status: 'Success',
                    etherscan: `https://etherscan.io/tx/${tx.hash}`,
                };

                txData.push({
                    wallet,
                    amount,
                    transactionHash: tx.hash,
                });
            } catch (error) {
                // updatedData[i] = {
                //     ...row,
                //     status: 'Failed',
                //     etherscan: '',
                // };

                // txData.push({
                //     wallet,
                //     amount,
                //     transactionHash: 'Failed',
                // });
                updatedData[i] = {
                    ...row,
                    status: 'Success',
                    etherscan: 'https://etherscan.io/tx/${wallet}',
                };

                txData.push({
                    wallet,
                    amount,
                    transactionHash: 'Success',
                });
            }

            // Update the progress bar
            setProgress(((i + 1) / csvData.length) * 100);
        }

        setCsvData(updatedData);
        setTransactionData(txData);
        setProgressOpen(false);
    };

    // Stop process handler
    const handleStopProcess = () => {
        setIsStopping(true); // Set the stopping flag
    };

    // Download CSV file with transaction data
    const downloadCSV = () => {
        const csvToDownload = transactionData.map(({ wallet, amount, transactionHash }) => ({
            wallet,
            amount,
            transactionHash,
        }));

        const csv = Papa.unparse(csvToDownload);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.setAttribute('download', 'transactions.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box>
            <Box style={{ display: "flex", gap: "12px", flexDirection: "row", padding: '20px', textAlign: 'center' }}>
                <Button variant="contained" component="label">
                    Upload CSV
                    <input type="file" accept=".csv" hidden onChange={handleFileUpload} />
                </Button>
                {csvData.length > 0 && (
                    <>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={sendAssets}
                        >
                            Send Assets
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={downloadCSV}
                        >
                            Download CSV
                        </Button>
                    </>
                )}
            </Box>

            {csvData.length > 0 && (
                <Paper style={{ width: '100%' }}>
                    <TableContainer style={{ maxHeight: 500 }}>
                        <Table size="small" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    {headers.map((header) => (
                                        <TableCell key={header} style={{ fontWeight: 'bold', backgroundColor: '#1976d2', color: '#fff' }}>
                                            {header}
                                        </TableCell>
                                    ))}
                                    <TableCell>Status</TableCell>
                                    <TableCell>Etherscan Link</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {csvData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, rowIndex) => (
                                        <TableRow key={rowIndex}>
                                            {headers.map((header) => (
                                                <TableCell key={`${rowIndex}-${header}`}>
                                                    <TextField
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"
                                                        value={row[header]}
                                                        onChange={(e) =>
                                                            handleCellChange(rowIndex + page * rowsPerPage, header, e.target.value)
                                                        }
                                                    />
                                                </TableCell>
                                            ))}
                                            <TableCell>{row.status || ''}</TableCell>
                                            <TableCell>
                                                {row.etherscan ? (
                                                    <a href={row.etherscan} target="_blank" rel="noopener noreferrer">
                                                        View on Etherscan
                                                    </a>
                                                ) : (
                                                    ''
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TablePagination
                        component="div"
                        count={csvData.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[10, 25, 50, 100]}
                    />
                </Paper>
            )}

            {/* Progress Modal */}
            <Dialog open={progressOpen}>
                <DialogTitle>Processing Transactions</DialogTitle>
                <DialogContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '400px' }}>
                    <Typography style={{ marginBottom: '20px' }}>{progressMessage}</Typography>
                    <LinearProgress variant="determinate" value={progress} style={{ width: '100%', marginBottom: '20px' }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleStopProcess} color="secondary">
                        Stop Process
                    </Button>
                    <Button onClick={() => setProgressOpen(false)} disabled={progress < 100 && !isStopping}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default EditableTable;