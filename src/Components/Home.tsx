import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { ServiceCard } from "./ServiceCard";

export const Home = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid container size={12} id="sectionA">
            <Grid size={6}>
              <Typography variant="h1">MASKETTA</Typography>
              <Typography variant="h2">
                landscape, gardening, and window washing services
              </Typography>
            </Grid>
            <Grid size={6} p={2} id="contact">
              <Button size="small" variant="contained">
                Make Payment
              </Button>
              <Button size="small" variant="contained">
                Request Quote
              </Button>
              <Typography variant="h2">(515) 309 - 2978</Typography>
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
                Providing homeowners with reliable and detailed services. Easy
                online access for setting up service and making payments.
              </Typography>
              <Typography variant="h3">
                Serving the Greater Des Moines Metro Area.
              </Typography>
            </Grid>

            {/* <Grid size={5} display={"none"}>
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
            </Grid> */}
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
              title={"some thing here"}
              subtitle={"Weekly, Bi-Weekly, or One-time"}
              listItems={["first thing, second thing, third thing"]}
            />
            <ServiceCard
              title={"some thing here"}
              subtitle={"Weekly, Bi-Weekly, or One-time"}
              listItems={["first thing, second thing, third thing"]}
            />
            <ServiceCard
              title={"some thing here"}
              subtitle={"Weekly, Bi-Weekly, or One-time"}
              listItems={["first thing, second thing, third thing"]}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
