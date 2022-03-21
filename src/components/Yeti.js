import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Yeti = ({ title, imageUrl }) => {
  return (
    <Paper elevation={3} sx={{ padding: "24px" }}>
      <img src={imageUrl} alt="Yeti" />
      <Typography
        fontSize={18}
        fontWeight={"700"}
        color={"#184093"}
        marginTop={"18px"}
      >
        {title}
      </Typography>
    </Paper>
  );
};

export default Yeti;
