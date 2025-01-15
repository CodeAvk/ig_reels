import { useState, useRef, useEffect } from "react";
import { Box, IconButton, Typography, Fade, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProductTag from "./ProductTag";
import VideoControls from "./VideoControls";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";

const ReelCard = ({ reel }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showLikeAnimation, setShowLikeAnimation] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const tapTimerRef = useRef(null);
  const tapCountRef = useRef(0);
  const moreMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setShowMore(false);
      }
    };

    if (showMore) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showMore]);

  // Intersection Observer setup
  useEffect(() => {
    const options = {
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (videoRef.current) {
        if (entry.isIntersecting) {
          videoRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch((error) => {
              console.error("Video autoplay failed:", error);
              setIsPlaying(false);
            });
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleTap = (e) => {
    e.preventDefault();
    tapCountRef.current += 1;

    if (tapCountRef.current === 1) {
      tapTimerRef.current = setTimeout(() => {
        if (tapCountRef.current === 1) {
          handlePlayPause();
        }
        tapCountRef.current = 0;
      }, 300);
    } else if (tapCountRef.current === 2) {
      clearTimeout(tapTimerRef.current);
      handleDoubleTap(e);
      tapCountRef.current = 0;
    }
  };

  const handleDoubleTap = (e) => {
    if (!isLiked) {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const heart = document.createElement("div");
      heart.style.position = "absolute";
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      e.target.appendChild(heart);

      setIsLiked(true);
      showHeartAnimation();
    }
  };

  const showCustomShareMenu = () => {
    const tempInput = document.createElement("input");
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Link copied to clipboard!");
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      showHeartAnimation();
    }
  };

  const handleFollow = (e) => {
    e.stopPropagation();
    setIsFollowing(!isFollowing);
  };

  const handleComment = () => {
    setShowComments(!showComments);
  };

  const handleMoreOptions = () => {
    setShowMore(!showMore);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const showHeartAnimation = () => {
    setShowLikeAnimation(true);
    setTimeout(() => setShowLikeAnimation(false), 1000);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${reel.username}'s Reel`,
          text: reel.description,
          url: window.location.href,
        });
      } catch (error) {
        showCustomShareMenu();
      }
    } else {
      showCustomShareMenu();
    }
  };

  const getDescriptionContent = () => {
    if (!isDescriptionExpanded) {
      return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* Header Section with Avatar and Username */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            {/* Avatar and Username */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                src={`https://picsum.photos/seed/${reel.username}/32`}
                alt={reel.username}
                sx={{ width: 32, height: 32, mr: 1 }}
              />
              {console.log("User Avatar:", reel.userAvatar)}
              <Typography
                variant="subtitle2"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                {reel.username}
              </Typography>
            </Box>

            {/* Follow Button */}
            <Button
              variant={isFollowing ? "outlined" : "contained"}
              size="small"
              onClick={handleFollow}
              sx={{
                color: isFollowing ? "white" : "black",
                borderColor: "white",
                bgcolor: isFollowing ? "transparent" : "white",
                minWidth: "80px",
                height: "30px",
                marginLeft: "auto",
                "&:hover": {
                  bgcolor: isFollowing
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.8)",
                  borderColor: "white",
                },
              }}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
          </Box>

          {/* Description Section */}
          <Typography variant="body2" component="span" sx={{ mb: 1 }}>
            {reel.description.slice(0, 100)}...{" "}
            <Typography
              component="span"
              sx={{
                color: "grey.500",
                cursor: "pointer",
                "&:hover": { color: "grey.300" },
              }}
              onClick={(e) => {
                e.stopPropagation();
                setIsDescriptionExpanded(true);
              }}
            >
              See more
            </Typography>
          </Typography>
        </Box>
      );
    }

    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 2 }}>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ fontWeight: "bold" }}
          >
            {reel.username}
          </Typography>
          <Button
            variant={isFollowing ? "outlined" : "contained"}
            size="small"
            onClick={handleFollow}
            sx={{
              color: isFollowing ? "white" : "black",
              borderColor: "white",
              bgcolor: isFollowing ? "transparent" : "white",
              minWidth: "80px",
              height: "30px",
              "&:hover": {
                bgcolor: isFollowing
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(255,255,255,0.8)",
                borderColor: "white",
              },
            }}
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </Box>
        <Typography variant="body2" paragraph>
          {reel.description}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#0095F6",
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mb: 1,
          }}
        >
          {reel.hashtags?.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "grey.500",
            cursor: "pointer",
            "&:hover": { color: "grey.300" },
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsDescriptionExpanded(false);
          }}
        >
          Show less
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        height: { xs: "100vh", sm: "calc(100vh - 64px)" }, // Adjust height for small screens
        width: "100%",
        position: "relative",
        bgcolor: "background.paper",
      }}
    >
      <Box
        onClick={handleTap}
        sx={{
          height: "100%",
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <video
          ref={videoRef}
          loop
          muted={isMuted}
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            aspectRatio: "9/16", // Consistent aspect ratio
          }}
          src={reel.videoUrl}
        />

        <Fade in={showLikeAnimation} timeout={300}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <FavoriteIcon
              sx={{
                fontSize: { xs: 80, sm: 120 },

                color: "secondary.main",
                animation: "heartBeat 1s ease-in-out",
                filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))",
                "@keyframes heartBeat": {
                  "0%": {
                    transform: "scale(0)",
                    opacity: 0,
                  },
                  "50%": {
                    transform: "scale(1.2)",
                    opacity: 1,
                  },
                  "100%": {
                    transform: "scale(1)",
                    opacity: 0,
                  },
                },
              }}
            />
          </Box>
        </Fade>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 80, sm: 100 },
          left: 16,
          right: 80,
          color: "white",
          zIndex: 2,
          transition: "all 0.3s ease",
        }}
      >
        {getDescriptionContent()}
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: 16,
          bottom: { xs: 80, sm: 100 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
          zIndex: 2,
        }}
      >
        <IconButton onClick={handleLike}>
          <FavoriteIcon sx={{ color: isLiked ? "secondary.main" : "white" }} />
          <Typography variant="caption" sx={{ color: "white", ml: 1 }}>
            {reel.likes + (isLiked ? 1 : 0)}
          </Typography>
        </IconButton>

        <IconButton onClick={handleComment}>
          <CommentIcon sx={{ color: "white" }} />
          <Typography variant="caption" sx={{ color: "white", ml: 1 }}>
            {reel.comments?.length || 0}
          </Typography>
        </IconButton>

        <IconButton onClick={handleShare}>
          <ShareIcon sx={{ color: "white" }} />
          <Typography variant="caption" sx={{ color: "white", ml: 1 }}>
            {reel.shares}
          </Typography>
        </IconButton>

        <IconButton onClick={handleMuteToggle}>
          {isMuted ? (
            <VolumeOffIcon sx={{ color: "white" }} />
          ) : (
            <VolumeUpIcon sx={{ color: "white" }} />
          )}
        </IconButton>

        <IconButton onClick={handleMoreOptions}>
          <MoreVertIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>

      {showComments && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "rgba(0,0,0,0.9)",
            color: "white",
            p: 2,
            maxHeight: "50vh",
            overflowY: "auto",
            zIndex: 3,
          }}
        >
          {reel.comments?.map((comment, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                {comment.username}
              </Typography>
              <Typography variant="body2">{comment.text}</Typography>
            </Box>
          ))}
        </Box>
      )}

      {showMore && (
        <Box
          ref={moreMenuRef}
          sx={{
            position: "absolute",
            bottom: 100,
            right: 16,
            bgcolor: "rgba(0,0,0,0.9)",
            borderRadius: 1,
            p: 1,
            zIndex: 3,
          }}
        >
          <Typography
            sx={{
              color: "white",
              p: 1,
              cursor: "pointer",
              "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
            }}
            onClick={(e) => {
              e.stopPropagation();
              // Handle report action
              setShowMore(false);
            }}
          >
            Report
          </Typography>
          <Typography
            sx={{
              color: "white",
              p: 1,
              cursor: "pointer",
              "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
            }}
            onClick={(e) => {
              e.stopPropagation();
              // Handle not interested action
              setShowMore(false);
            }}
          >
            Not Interested
          </Typography>
          <Typography
            sx={{
              color: "white",
              p: 1,
              cursor: "pointer",
              "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
            }}
            onClick={(e) => {
              e.stopPropagation();
              // Handle copy link action
              navigator.clipboard.writeText(window.location.href);
              setShowMore(false);
            }}
          >
            Copy Link
          </Typography>
        </Box>
      )}

      {!isPlaying && (
        <VideoControls isPlaying={isPlaying} onPlayPause={handlePlayPause} />
      )}

      {reel.products?.map((product) => (
        <ProductTag
          key={product.id}
          product={product}
          position={product.position}
        />
      ))}

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          bgcolor: "background.paper",
          borderTop: 1,
          borderColor: "divider",
          py: 1,
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
    </Box>
  );
};

export default ReelCard;
