// src/pages/index.js
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";

import { Box } from "@mui/material";
import { reelsData } from "../utils/mockData";
import ReelCard from "../components/ReelCard";
import Footer from "../components/Footer";

export default function Home() {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const containerRef = useRef(null);
  const theme = useTheme(); // Access the theme object

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
      ref={containerRef}
      sx={{
        width: "375px", // Mobile width
        margin: "0 auto", // Center the layout
        height: "100vh",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
        border: "1px solid #ccc", // Optional: Simulate a device frame
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
              height: "calc(100vh - 64px)", // Responsive height
            },
          }}
        >
          <ReelCard reel={reel} inView={currentReelIndex === index} />
        </Box>
      ))}
      <Footer /> {/* Add the Footer component here */}
    </Box>
  );
}
