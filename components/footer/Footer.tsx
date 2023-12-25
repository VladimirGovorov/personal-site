"use client";
import {
  Box,
  Container,
  Button,
  Typography,
  Grid,
  Divider,
} from "@mui/material/";
import Image from "next/image";

import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  const CustomDivider = styled(Divider)(({ theme }) => ({
    height: "2px",
    width: "12px",
    backgroundColor: theme.palette.primary.main,
  }));

  return (
    <Box component="section" id="home">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h6">All rights reserved ©</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
