"use client";
import {
  Box,
  Container,
  Button,
  Typography,
  Grid,
  Divider,
  IconButton,
} from "@mui/material/";
import Image from "next/image";
import AvatarImage from "../public/images/avatar.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@mui/material/styles";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const CustomDivider = styled(Divider)(({ theme }) => ({
    height: "4px",
    width: "120px",
    backgroundColor: theme.palette.primary.main,
  }));

  const theme = useTheme();

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ type: "spring", duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      <Container
        id="about"
        sx={{
          minHeight: {
            xs: "100dvh",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <Typography component="h3" variant="h3">
            About
            <CustomDivider />
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: {
              xs: "center",
              lg: "space-between",
            },
            alignItems: "center",
          }}
        >
          <Box>
            <Image src={AvatarImage} width={350} alt="Avatar image" />
          </Box>
          <Box sx={{ marginTop: "30px", width: { xs: "100%", md: "50%" } }}>
            <Typography component="h4" variant="h4" color="primary">
              Who am I?
              {/* <CustomDivider /> */}
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              sx={{ marginTop: "15px", textAlign: "justify" }}
            >
              Dedicated QA Developer with a fervent passion for ensuring
              software excellence. I thrive on the intricate details of Quality
              Assurance and possess a genuine love for technology in all its
              facets. Committed to enhancing the user experience through
              meticulous testing and a profound appreciation for the
              ever-evolving tech landscape.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <IconButton
                aria-label={"Github"}
                component="a"
                href={""}
                rel="noopener"
                size="large"
                sx={{
                  fill: (theme) => theme.palette.common.white,
                  "&:hover": {
                    fill: (theme) => theme.palette.primary.main,
                  },
                  "&:focus": {
                    fill: (theme) => theme.palette.primary.main,
                  },
                }}
                target="_blank"
              >
                <GitHubIcon
                  sx={{
                    fontSize: "80px",
                    color: theme.palette.primary.main,
                  }}
                />
              </IconButton>
              <IconButton
                aria-label={"Github"}
                component="a"
                href={""}
                rel="noopener"
                size="large"
                sx={{
                  fill: (theme) => theme.palette.common.white,
                  "&:hover": {
                    fill: (theme) => theme.palette.primary.main,
                  },
                  "&:focus": {
                    fill: (theme) => theme.palette.primary.main,
                  },
                }}
                target="_blank"
              >
                <LinkedInIcon
                  sx={{
                    fontSize: "80px",
                    color: theme.palette.primary.main,
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default About;
