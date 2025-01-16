import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { reelsData } from "../utils/mockData";
import ReelCard from "../components/ReelCard";
import Footer from "../components/Footer";

export default function Home() {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const containerRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            setCurrentReelIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const reelElements = document.querySelectorAll(".reel-container");
    reelElements.forEach((el) => observer.observe(el));

    return () => {
      reelElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          width: "375px",
          height: "calc(100vh - 56px)", // Adjust for footer height
          overflowY: "auto",
          scrollSnapType: "y mandatory",
          border: "1px solid #ccc",
          position: "relative",
        }}
      >
        {reelsData.map((reel, index) => (
          <Box
            key={reel.id}
            className="reel-container"
            data-index={index}
            sx={{
              height: "100vh",
              scrollSnapAlign: "start",
              [theme.breakpoints.down("sm")]: {
                height: "calc(100vh - 56px)", // Match container height
              },
            }}
          >
            <ReelCard reel={reel} inView={currentReelIndex === index} />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "375px", // Match the ReelCard width
          backgroundColor: "background.paper",
          borderTop: "1px solid #ccc",
          zIndex: 1000,
        }}
      ></Box>
    </Box>
  );
}
