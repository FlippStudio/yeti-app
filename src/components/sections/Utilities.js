import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "../Slider";

const Utilities = () => {
  return (
    <>
      <section className="utilities" id="uti">
        <Container maxWidth="xl">
          <Box>
            <Typography
              component="h2"
              className="welcome"
              textAlign={"center"}
              marginTop={"100px"}
              fontSize={56}
              position={"relative"}
              zIndex={10}
            >
              Yeti Utilities
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <Typography
                component="div"
                fontSize={20}
                lineHeight={"32px"}
                marginTop={1}
                maxWidth={720}
                textAlign={"center"}
                marginBottom={"56px"}
              >
                Duis egestas rutrum erat vel finibus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Donec dapibus purus eget nisl
                efficitur, at porttitor ex accumsan.
              </Typography>
            </Box>
          </Box>
        </Container>
      </section>

      <Slider />
    </>
  );
};

export default Utilities;
