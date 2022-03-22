import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const SocialCommunity = ({ imageUrl, name }) => {
  return (
    <a href="#" className="social-link">
      <Box display={"flex"} alignItems={"center"} marginX={"40px"}>
        <img src={imageUrl} alt="Community" />
        <Typography
          component="span"
          fontSize={24}
          fontWeight={"900"}
          lineHeight={"24px"}
          marginLeft={"16px"}
        >
          {name}
        </Typography>
      </Box>
    </a>
  );
};

export default SocialCommunity;
