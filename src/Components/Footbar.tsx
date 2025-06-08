import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Footbar = () => {
  return (
    <Box component={"section"} id="footbar" p={3}>
      <Grid container>
        
        <Grid size={12}>
            <Typography>Masketta<br/>Des Moines, Iowa<br/>515.329.4660<br/>mark@masketta.com</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={12}>
            <Typography>Masketta Home Services. All Rights Reserved 2025.</Typography>
        </Grid>
        <Grid size={12}>
          <Link to="/privacy">Privacy Policy</Link>
        </Grid>
      </Grid>
    </Box>
  );
};
