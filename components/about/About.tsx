"use client";
import {
  Box,
  Container,
  Typography,
  Divider,
  IconButton,
} from "@mui/material/";
import Image from "next/image";
import AvatarImage from "../../public/images/avatar.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import { SiSelenium } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

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
          marginTop: {
            xs: "100px",
            sm: "50px",
          },
          marginBottom: { xs: "100px", md: "50px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: { xs: "100px", md: "50px" },
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
              sx={{ marginTop: "15px", textAlign: "start" }}
            >
              Dedicated QA Developer with a passion for ensuring software
              excellence. Committed to enhancing the user experience through
              diligent testing.I appreciate every opportunity to learn and grow
              as a QA dev.
            </Typography>
            <Box style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <Typography
                sx={{
                  marginTop: "15px",

                  typography: {
                    xs: "h6",
                    sm: "h6",
                  },
                  textDecoration: "underline",
                  textDecorationColor: `${theme.palette.primary.main}`,
                }}
              >
                Stack
              </Typography>
              <Typography
                sx={{
                  marginTop: "15px",
                  typography: {
                    xs: "h6",
                    sm: "h6",
                  },
                }}
              >
                I worked with:
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <IconButton
                aria-label={"Selenium"}
                component="a"
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
                  display: "flex",
                  flexDirection: "column",
                }}
                target="_blank"
              >
                <SiSelenium
                  style={{
                    fontSize: "60px",
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  sx={{
                    typography: {
                      xs: "h6",
                      sm: "h5",
                    },
                  }}
                  style={{
                    color: theme.palette.primary.main,
                    marginTop: "5px",
                  }}
                >
                  Selenium
                </Typography>
              </IconButton>
              <IconButton
                aria-label={"Jenkins"}
                component="a"
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
                  display: "flex",
                  flexDirection: "column",
                }}
                target="_blank"
              >
                <FaJenkins
                  style={{
                    fontSize: "60px",
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  sx={{
                    typography: {
                      xs: "h6",
                      sm: "h5",
                    },
                  }}
                  style={{
                    color: theme.palette.primary.main,
                    marginTop: "5px",
                  }}
                >
                  Jenkins
                </Typography>
              </IconButton>
              <IconButton
                aria-label={"java"}
                component="a"
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
                  display: "flex",
                  flexDirection: "column",
                }}
                target="_blank"
              >
                <FaJava
                  style={{
                    fontSize: "60px",
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  sx={{
                    typography: {
                      xs: "h6",
                      sm: "h5",
                    },
                  }}
                  style={{
                    color: theme.palette.primary.main,
                    marginTop: "5px",
                  }}
                >
                  Java
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default About;
