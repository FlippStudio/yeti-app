import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const FaqAccordion = ({ title, content }) => {
  return (
    <div>
      <Accordion
        sx={{
          borderTop: "1px solid rgba(102, 200, 255, 0.4)",
          borderBottom: "1px solid rgba(102, 200, 255, 0.4)",
          paddingY: "40px",
          backgroundColor: "#091434",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon fontSize="large" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            marginBottom: "0",
          }}
        >
          <Typography fontSize={24} lineHeight={"32px"} className="acc-title">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize={16} lineHeight={"24px"}>
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
