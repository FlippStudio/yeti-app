import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import yetiOne from "../../images/yetis/yeti-1.svg";
import yetiTwo from "../../images/yetis/yeti-2.svg";
import yetiFour from "../../images/yetis/yeti-4.svg";
import yetiFive from "../../images/yetis/yeti-5.svg";
import Yeti from "../Yeti";

const yetis = [
  {
    id: 1,
    name: "YETI NAME #12345",
    imageUrl: yetiOne,
  },
  {
    id: 2,
    name: "YETI NAME #12345",
    imageUrl: yetiTwo,
  },
  {
    id: 3,
    name: "YETI NAME #12345",
    imageUrl: yetiFour,
  },
  {
    id: 4,
    name: "YETI NAME #12345",
    imageUrl: yetiOne,
  },
  {
    id: 5,
    name: "YETI NAME #12345",
    imageUrl: yetiFive,
  },
  {
    id: 6,
    name: "YETI NAME #12345",
    imageUrl: yetiFour,
  },
  {
    id: 7,
    name: "YETI NAME #12345",
    imageUrl: yetiTwo,
  },
];

const Utilities = () => {
  return (
    <>
      <section className="utilities">
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
                marginBottom={"144px"}
              >
                Duis egestas rutrum erat vel finibus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Donec dapibus purus eget nisl
                efficitur, at porttitor ex accumsan.
              </Typography>
            </Box>
          </Box>
        </Container>
      </section>
      <Box
        display={"flex"}
        justifyContent={"center"}
        marginTop={"-175px"}
        overflow={"hidden"}
      >
        <Stack direction="row" spacing={4}>
          {yetis.map((yeti) => (
            <Yeti
              key={yeti.id}
              title={yeti.name}
              imageUrl={yeti.imageUrl}
              transform={yeti.transform}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Utilities;
