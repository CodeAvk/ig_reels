// src/components/VideoControls.js
import { Box, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const VideoControls = ({ isPlaying, onPlayPause }) => {
  return (
    <Box
      onClick={onPlayPause}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      {!isPlaying && (
        <IconButton
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' },
          }}
        >
          <PlayArrowIcon sx={{ fontSize: 48 }} />
        </IconButton>
      )}
    </Box>
  );
};

export default VideoControls;