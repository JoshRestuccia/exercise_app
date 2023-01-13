import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/bannerFinal.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="24px">
        Lifters Club
      </Typography>
      <Typography
        fontWeight="700"
        mb="23px"
        mt="30px"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
      >
        Get Jacked and Juicy <br /> using our App
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="20px">
        Check of the most anabolic exercises <br />
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#FF2625",
          padding: "10px",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight="600px"
        color="#FF2625"
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        Powerlifting
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
