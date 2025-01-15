// src/components/ProductTag.js
import { useState } from 'react';
import { Box, Paper, Typography, Fade } from '@mui/material';

const ProductTag = ({ product, position }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Box
      sx={{
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        zIndex: 2,
      }}
    >
      <Box
        onClick={() => setShowDetails(!showDetails)}
        sx={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          bgcolor: 'secondary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Typography variant="body2" sx={{ color: 'white' }}>
          +
        </Typography>
      </Box>

      <Fade in={showDetails}>
        <Paper
          sx={{
            position: 'absolute',
            left: 40,
            top: 0,
            p: 1,
            minWidth: 200,
            bgcolor: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          <Typography variant="subtitle2" sx={{ color: 'white' }}>
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ${product.price}
          </Typography>
        </Paper>
      </Fade>
    </Box>
  );
};

export default ProductTag;