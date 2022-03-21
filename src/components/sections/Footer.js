import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Socials from "../Socials";

const Footer = () => {
  return (
    <section className="footer">
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"100%"}
        >
          <Typography component="div">© 2022 YETI KOTLETI</Typography>
          <Socials />
        </Box>
      </Container>
    </section>
  );
};

export default Footer;
