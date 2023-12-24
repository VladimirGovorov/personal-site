"use client";
import {
  Box,
  Container,
  Typography,
  Divider,
  IconButton,
  Alert,
} from "@mui/material/";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactImage from "../../public/images/contact.png";
import EmailIcon from "@mui/icons-material/Email";

import { useTheme } from "@mui/material/styles";

const Contact = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [successMsg, setSuccessMsg] = useState<boolean>(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const CustomDivider = styled(Divider)(({ theme }) => ({
    height: "4px",
    width: "180px",
    backgroundColor: theme.palette.primary.main,
  }));

  const theme = useTheme();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mail@gmail.com");
    setSuccessMsg(true);

    // when the component is mounted, the alert is displayed for 1 seconds
    setTimeout(() => {
      setSuccessMsg(false);
    }, 2000);
  };

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
        id="contact"
        sx={{
          minHeight: {
            xs: "100dvh",
          },
          marginBottom: "50px",
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
            Let&apos;s talk
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
          <Box sx={{ marginTop: "30px", width: { xs: "100%", md: "50%" } }}>
            <Typography component="h4" variant="h4" color="primary">
              Have some interesting idea?
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              sx={{ marginTop: "15px", textAlign: "start" }}
            >
              Let&apos;s collaborate, and feel free to ask me any additional
              questions
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
                Find me at:
              </Typography>
            </Box>

            <Box>
              <IconButton
                onClick={handleCopyEmail}
                aria-label={"Email"}
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
                <EmailIcon
                  style={{
                    fontSize: "80px",
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
                  mail@gmail.com
                </Typography>
              </IconButton>
              {successMsg && (
                <Alert severity="success">Copied successfully!</Alert>
              )}
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
          <Box
            sx={{
              marginTop: {
                xs: "60px",
                md: 0,
              },
              marginLeft: {
                xs: 0,
                md: "15px",
              },
            }}
          >
            <Image src={ContactImage} width={350} alt="Avatar image" />
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Contact;
