import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Trait = ({ imageUrl }) => {
  return (
    <Box>
      <img src={imageUrl} alt="Trait" width={"100%"} />
      <Box display={"flex"} marginTop={1} justifyContent={"center"}>
        <Typography
          component="span"
          fontSize={20}
          lineHeight={"32px"}
          color={"#00A6F1"}
        >
          Layer:
        </Typography>
        <Typography
          component="span"
          className="welcome"
          fontSize={32}
          lineHeight={"32px"}
          marginLeft={2}
        >
          123
        </Typography>
        <Typography
          component="span"
          fontSize={20}
          lineHeight={"32px"}
          marginLeft={2}
        >
          items
        </Typography>
      </Box>
    </Box>
  );
};

export default Trait;
