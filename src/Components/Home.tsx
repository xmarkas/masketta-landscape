import { Box, Button, Grid, Typography } from "@mui/material";
import { ServiceCard } from "./ServiceCard";
import { Footbar } from "./Footbar";

export const Home = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid container size={12} id="sectionA">
            <Grid size={{md: 6, xs:12}}>
              <Typography variant="h1">MASKETTA</Typography>
              <Typography variant="h2">
                landscape, gardening, and window washing services
              </Typography>
            </Grid>
            <Grid size={{md: 6, xs:12}} p={2} id="contact">
              {/* <Button disabled size="small" variant="contained">
                Make Payment
              </Button>
              <Button disabled size="small" variant="contained">
                Request Quote
              </Button> */}
              <Typography color="white" textAlign={"center"} fontSize={"1rem"}>Call: (515) 309 - 2978</Typography>
            </Grid>
          </Grid>
          <Grid
            size={12}
            id="sectionB"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid size={8} p={4}>
              <Typography variant="h2">Service</Typography>
              <Typography variant="h3">
                Providing homeowners with reliable and detailed services. 
              </Typography>
              <Typography variant="h3">
                Serving the Greater Des Moines Metro Area.
              </Typography>
            </Grid>

          </Grid>
          <Grid
            container
            id="sectionC"
            rowSpacing={1.5}
            bgcolor={"white"}
            width={"100%"}
            columnSpacing={1.5}
            spacing={1.5}
          >
            <ServiceCard
              title={"Lawn Service"}
              subtitle={"(Weekly, Bi-Weekly, or One-time)"}
              listItems={[
                "Mowing and Edging",
                "Yard Clean-up",
                "Tree and Shrub maintenance",
                "Fertilizing",
              ]}
            />
            <ServiceCard
              title={"Planting Service"}
              subtitle={"Seasonal Planting and Garden Design"}
              listItems={["Add Annuals, Shrubs, and Pots", "Get a good balance of year round and perinial shrubs!"]}
            />
            <ServiceCard
              title={"Window Washing"}
              subtitle={"Full service window cleaning, Inside and Out!"}
              listItems={[]}
            />
          </Grid>
        </Grid>
        <Footbar />
      </Box>
    </>
  );
};
