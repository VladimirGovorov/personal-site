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

interface HeroData {
  greetings: string;
  introduction: string;
  role: string;
  paragraph: string;
  button1: string;
  button2: string;
}
import qaImage from "../public/images/qa-home.gif";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const Home = () => {
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
          minHeight: {
            xs: "100dvh",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          //   clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box mb={7} width={"100%"}>
            <Typography gutterBottom component="h4" variant="h4">
              <Typography
                color="primary.red"
                component="span"
                variant="inherit"
              >
                Hi there! <span className={styles.wave}>👋🏼</span>
              </Typography>{" "}
              I&apos;m
              <Typography
                color="primary.main"
                component="span"
                variant="inherit"
              >
                {" "}
                Vlad
              </Typography>
            </Typography>

            <Typography
              gutterBottom
              component="h1"
              variant="h2"
              color="#fbae38"
            >
              <Typewriter
                options={{
                  strings: [" QA Developer", "Freelancer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>

            <Typography color="textSecondary" component="p" variant="h6">
              Passionate about QA and all{" "}
              <Typography
                variant="inherit"
                component="span"
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: `${theme.palette.red.main}`,
                }}
                display="inline"
              >
                tech related{" "}
              </Typography>
            </Typography>

            <Grid container spacing={2} mt={"20px"}>
              <Grid item>
                <Button
                  style={{
                    backgroundColor: "#fc5252",
                  }}
                  color="primary"
                  href="#about"
                  size="large"
                  variant="contained"
                >
                  About
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={{
                    borderColor: "#fc5252",
                    color: "#fc5252",
                  }}
                  href="#contact"
                  size="large"
                  variant="outlined"
                >
                  Hire me
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Image
              src={qaImage}
              className={styles.heroImage}
              alt="Hero image"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
