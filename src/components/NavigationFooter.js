import React from 'react';
import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PersonIcon from '@mui/icons-material/Person';

const NavigationFooter = () => {
  return (
    <Box
      className="fixed bottom-0 left-0 right-0"
      sx={{
        bgcolor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        py: 1,
        borderTop: '1px solid #333',
      }}
    >
      <button className="flex flex-col items-center text-white">
        <HomeIcon fontSize="large" />
        <span className="text-xs mt-1">Home</span>
      </button>

      <button className="flex flex-col items-center text-white">
        <SearchIcon fontSize="large" />
        <span className="text-xs mt-1">Search</span>
      </button>

      <button className="flex flex-col items-center text-white">
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: '50%',
            p: 0.5,
          }}
        >
          <AddIcon fontSize="large" sx={{ color: 'black' }} />
        </Box>
      </button>

      <button className="flex flex-col items-center text-white">
        <PlayCircleOutlineIcon fontSize="large" />
        <span className="text-xs mt-1">Reels</span>
      </button>

      <button className="flex flex-col items-center text-white">
        <PersonIcon fontSize="large" />
        <span className="text-xs mt-1">Profile</span>
      </button>
    </Box>
  );
};

export default NavigationFooter;
