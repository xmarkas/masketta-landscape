import { Box, Grid, Typography } from "@mui/material";


export const Windows = () => {
  return (
    <Box id="sectionA" className="windows-wrap" >
      <Grid id="back-overlay" className="windows" container>
        <Grid size={{ md: 6, xs: 12 }}>
          <img id="logo" src="raccoon_alpha.png" />

          <Typography variant="h1">MASKETTA</Typography>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }} p={2} id="contact">
          {/* <Button disabled size="small" variant="contained">
                Make Payment
              </Button>
              <Button disabled size="small" variant="contained">
                Request Quote
              </Button> */}
          <Typography
            color="white"
            textAlign={"center"}
            fontSize={"1rem"}
            component={"a"}
            href="tel:+15153294660"
          >
            Call/Text: 515.329.4660
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
