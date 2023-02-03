import { Box } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

function Title({ style = {}, navigateTo, title, upperCase }) {
  if (upperCase) {
    title = title.toUpperCase();
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <div style={style} className={"tile-title bold"}>
        {navigateTo ? (
          <RouterLink
            to={navigateTo}
            style={{ color: "white", textDecoration: "none" }}
          >
            {title}
          </RouterLink>
        ) : (
          title
        )}
      </div>
    </Box>
  );
}

export default Title;
