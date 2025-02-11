import { Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PersonIcon from "@mui/icons-material/Person";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "375px", // Match ReelCard width
        height: "56px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
        zIndex: 1000,
      }}
    >
      <IconButton>
        <HomeIcon />
      </IconButton>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton>
        <AddIcon />
      </IconButton>
      <IconButton>
        <PlayCircleOutlineIcon />
      </IconButton>
      <IconButton>
        <PersonIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
