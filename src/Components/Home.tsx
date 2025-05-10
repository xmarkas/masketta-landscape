import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { ServiceCard } from "./ServiceCard";

export const Home = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid size={12} id="sectionA">
            <Typography variant="h1">MASKETTA</Typography>
            <Typography variant="h2">
              landscape, gardening, and window washing services
            </Typography>
          </Grid>
          <Grid size={12} id="sectionB">
            <Grid size={7} p={4}>
              <Typography variant="h2">Service</Typography>
              <Typography variant="h3">
                Providing homeowners with reliable and detailed services. Easy
                online access for setting up service and making payments.
              </Typography>
            </Grid>
            <Grid size={5}>
              <div className="image-container">
                <div
                  className="image-wrap"
                  style={{ backgroundImage: "url('planting.jpg')" }}
                ></div>
                <div
                  className="image-wrap"
                  style={{ backgroundImage: "url('maintenance.jpg')" }}
                ></div>
                <div
                  className="image-wrap"
                  style={{ backgroundImage: "url('hardscape.jpg')" }}
                ></div>
              </div>
            </Grid>
          </Grid>
          <Grid size={12} id="sectionC" rowSpacing={2} columnSpacing={2}>
            <ServiceCard  />

            <Grid size={6}>
              <Box className="service">
                <Button
                  id="maint-go"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                >
                  go
                </Button>
                <Typography variant="h4">
                  Yard Maintenance - Weekly, Bi-Weekly, or One-Time
                </Typography>
                <List>
                  <ListItem>Mowing and Edging</ListItem>
                  <ListItem>Weeding and Bed Maintentance</ListItem>
                  <ListItem>Fertilizing, Pruning, and Hedge Trimming</ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
