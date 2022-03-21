import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import yeti from "../../images/yeti-help.svg";
import help from "../../images/traits/help.svg";
import iglo from "../../images/traits/iglo.svg";
import meeting from "../../images/traits/meeting.svg";
import traitOne from "../../images/traits/trait-1.svg";
import traitTwo from "../../images/traits/trait-2.svg";
import traitThree from "../../images/traits/trait-3.svg";
import traitFour from "../../images/traits/trait-4.svg";
import traitFive from "../../images/traits/trait-5.svg";
import traitSix from "../../images/traits/trait-6.svg";
import Trait from "../Trait";

const traits = [traitOne, traitTwo, traitThree, traitFour, traitFive, traitSix];

const Traits = () => {
  return (
    <section className="traits">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img src={yeti} alt="Yeti Kotleti" className="img-fluid" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography compontent="h3" className="welcome" fontSize={32}>
                Yeti loves animals
              </Typography>
              <Typography
                component="h2"
                className="welcome"
                fontSize={64}
                lineHeight={"64px"}
                color={"#00A6F1"}
                marginBottom={"40px"}
              >
                Yeti help animals!
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={3} marginBottom={"40px"}>
                  <Box display={"flex"} justifyContent={"center"}>
                    <img src={help} alt="Yeti's helping" />
                  </Box>
                </Grid>
                <Grid item xs={9} marginBottom={"40px"}>
                  <Typography component="div" fontSize={20} lineHeight={"32px"}>
                    We help animals in need all over the world!
                  </Typography>
                  <Typography
                    compotent="div"
                    fontSize={20}
                    lineHeight={"32px"}
                    fontWeight={"700"}
                  >
                    10% of sales go to animal shelters!
                  </Typography>
                </Grid>
                <Grid item xs={3} marginBottom={"40px"}>
                  <Box display={"flex"} justifyContent={"center"}>
                    <img src={iglo} alt="Yeti build iglo" />
                  </Box>
                </Grid>
                <Grid item xs={9} marginBottom={"40px"}>
                  <Typography component="div" fontSize={20} lineHeight={"32px"}>
                    Each animal that has received help from us
                  </Typography>
                  <Typography
                    compotent="div"
                    fontSize={20}
                    lineHeight={"32px"}
                    fontWeight={"700"}
                  >
                    is warmly welcomed in our igloo
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Box display={"flex"} justifyContent={"center"}>
                    <img src={meeting} alt="Yeti's meetings" />
                  </Box>
                </Grid>
                <Grid item xs={9}>
                  <Typography
                    component="span"
                    fontSize={20}
                    lineHeight={"32px"}
                  >
                    We organize
                  </Typography>
                  <Typography
                    compotent="span"
                    fontSize={20}
                    lineHeight={"32px"}
                    fontWeight={"700"}
                  >
                    meetings 3 times a year for all YETI owners!
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Typography
            component="h2"
            className="welcome"
            textAlign={"center"}
            marginTop={"180px"}
            fontSize={56}
            marginBottom={"54px"}
          >
            Our traits
          </Typography>
          <Grid container spacing={3}>
            {traits.map((url, index) => (
              <Grid item xs={2}>
                <Trait imageUrl={url} key={index} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Traits;
