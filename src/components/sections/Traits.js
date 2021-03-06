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
import YetiHelp from "../YetiHelp";

const traits = [traitOne, traitTwo, traitThree, traitFour, traitFive, traitSix];
const yetis = [
  {
    id: 1,
    image: help,
    text: "We help animals in need all over the world! 10% of sales go to animal shelters!",
  },
  {
    id: 2,
    image: iglo,
    text: "Each animal that has received help from us is warmly welcomed in our igloo",
  },
  {
    id: 3,
    image: meeting,
    text: "We organize meetings 3 times a year for all YETI owners!",
  },
];

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
                {yetis.map((yeti) => (
                  <YetiHelp
                    key={yeti.id}
                    imageUrl={yeti.image}
                    text={yeti.text}
                  />
                ))}
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
              <Grid item xs={2} key={index}>
                <Trait imageUrl={url} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Traits;
