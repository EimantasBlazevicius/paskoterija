import React from "react";
import { Box } from "@mui/material";

const ContentWrapper = (props: any) => {
  return (
    <>
      <Box bgcolor="#f5daa3" style={{ height: "90vh" }}>
        {props.children}
      </Box>
    </>
  );
};

export default ContentWrapper;
