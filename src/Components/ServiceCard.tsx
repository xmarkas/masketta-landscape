import { ArrowForward } from "@mui/icons-material";
import { Grid, Box, Button, Typography, List, ListItem } from "@mui/material";
import { FC } from "react";

interface CardProps {
  title: string;
  subtitle: string;
  listItems: string[];
}

export const ServiceCard: FC<CardProps> = ({ title, subtitle, listItems }) => {
  return (
    <Grid
      size={6}
      height={"50vw"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      position={"relative"}
    >
      <img src={"maintenance.jpg"} className="service-img" />
      <Box className="service">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">{subtitle}</Typography>
        <List>
          {listItems.map((i) => (
            <ListItem>
              <Typography fontWeight={300}>{i}</Typography>
            </ListItem>
          ))}
        </List>
        <Button variant="contained" size="large" endIcon={<ArrowForward />}>
          go
        </Button>
      </Box>
    </Grid>
  );
};
