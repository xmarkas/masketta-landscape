import { Box, Grid, Typography } from "@mui/material";

export const Footbar = () => {
  return (
    <Box component={"section"} id="footbar" p={3}>
      <Grid container>
        
        <Grid size={12}>
            <Typography>Masketta<br/>Des Moines, Iowa<br/>515.329.4660</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={12}>
            <Typography>Masketta Home Services. All Rights Reserved 2025.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
