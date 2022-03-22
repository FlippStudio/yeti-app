import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const YetiHelp = ({ imageUrl, text }) => {
  return (
    <>
      <Grid item xs={3} marginBottom={"40px"}>
        <Box display={"flex"} justifyContent={"center"}>
          <img src={imageUrl} alt="Yeti's helping" />
        </Box>
      </Grid>
      <Grid item xs={8} marginBottom={"40px"}>
        <div className="yeti-help">{text}</div>
      </Grid>
    </>
  );
};

export default YetiHelp;
