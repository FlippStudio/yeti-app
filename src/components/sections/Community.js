import Box from "@mui/material/Box";
import discord from "../../images/community/disc-com.svg";
import twitter from "../../images/community/tt-com.svg";
import instagram from "../../images/community/insta-com.svg";
import SocialCommunity from "../SocialCommunity";

const socials = [
  {
    id: 1,
    imageUrl: discord,
    name: "DISCORD",
  },
  {
    id: 2,
    imageUrl: twitter,
    name: "TWITTER",
  },
  {
    id: 3,
    imageUrl: instagram,
    name: "INSTAGRAM",
  },
];

const Community = () => {
  return (
    <section className="community">
      <Box display={"flex"} justifyContent={"center"}>
        {socials.map((social) => (
          <SocialCommunity
            imageUrl={social.imageUrl}
            name={social.name}
            key={social.id}
          />
        ))}
      </Box>
    </section>
  );
};

export default Community;
