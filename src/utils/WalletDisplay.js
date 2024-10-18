import { Box, Chip, IconButton, Typography, Tooltip, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Icon for disconnect
import { useState } from 'react';

const WalletDisplay = ({ address, disconnect }) => {
  const [copied, setCopied] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCopy = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    }
  };

  const handleChipClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDisconnect = () => {
    handleMenuClose();
    disconnect();
  };

  if (!address) {
    return null; // or you can return a placeholder like "No address connected"
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        <Chip 
          label={`${address.slice(0, 6)}...${address.slice(-4)}`} 
          size="small" 
          sx={{ fontSize: '0.75rem', padding: '0 5px', cursor: 'pointer', color:'white', backgroundColor:"grey" }} 
          onClick={handleChipClick}
        />
        <Tooltip title={copied ? "Copied!" : "Copy to clipboard"} arrow>
          <IconButton onClick={handleCopy} size="small" sx={{ ml: 0, color:"#fff" }}>
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Typography>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem onClick={handleDisconnect} >
          <ListItemIcon >
            <ExitToAppIcon fontSize="small" color='warning'/>
          </ListItemIcon>
          <ListItemText primary="Disconnect" />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default WalletDisplay;