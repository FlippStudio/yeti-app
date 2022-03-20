import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import discord from "../images/socials/discord-welcome.svg";
import arrow from '../images/arrow.svg'

const Welcome = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ marginTop: "94px", position: "relative" }}
      className="container"
    >
      <div className="yeti"></div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography
              component="h1"
              className="welcome"
              fontSize={72}
              lineHeight={"80px"}
            >
              YETI KOTLETI
            </Typography>
            <Typography
              component="h1"
              className="welcome"
              fontSize={55}
              lineHeight={"64px"}
              color={"#00A6F1"}
            >
              Lorem ipsum
            </Typography>
            <Typography
              component="div"
              fontSize={20}
              lineHeight={"32px"}
              width={510}
              marginTop={2}
              marginBottom={4}
            >
              Duis egestas rutrum erat vel finibus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec dapibus purus eget nisl
              efficitur, at porttitor ex accumsan.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: 900,
                    fontSize: 16,
                    backgroundColor: "#00A6F1",
                    height: 56,
                    letterSpacing: "0.01em",
                  }}
                >
                  Explore now!
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img src={discord} alt="Discord" />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Typography
                    component="h6"
                    fontSize={16}
                    fontWeight={"900"}
                    marginLeft={2}
                  >
                    JOIN DISCORD
                  </Typography>
                </a>
              </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={"130px"}>
              <Grid item xs={4}>
                <Typography
                  component="p"
                  fontSize={32}
                  className="welcome"
                  marginBottom={0}
                  lineHeight={"32px"}
                >
                  30K+
                </Typography>
                <Typography component="p" fontSize={20} color={"#00A6F1"}>
                  Artowork
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  component="p"
                  fontSize={32}
                  className="welcome"
                  marginBottom={0}
                  lineHeight={"32px"}
                >
                  130K+
                </Typography>
                <Typography component="p" fontSize={20} color={"#00A6F1"}>
                  Auction
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  component="p"
                  fontSize={32}
                  className="welcome"
                  marginBottom={0}
                  lineHeight={"32px"}
                >
                  10K
                </Typography>
                <Typography component="p" fontSize={20} color={"#00A6F1"}>
                  Owners
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={7}>
              <div className="arrow-space">
                  <img src={arrow} alt="Move down" />
              </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Welcome;
