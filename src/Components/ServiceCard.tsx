import { ArrowForward } from "@mui/icons-material";
import { Grid, Box, Button, Typography, List, ListItem } from "@mui/material";
import { FC } from "react";

interface CardProps {
  title: string;
  subtitle: string;
  listItems: string[];
  background: {}
}

export const ServiceCard: FC<CardProps> = ({ title, subtitle, listItems, background }) => {
  return (
    <Grid
      size={{md: 6, xs: 12}}
      // height={"40vw"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      position={"relative"}
      sx={background}
    >
      <Box className="service">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">{subtitle}</Typography>
        <List>
          {listItems.map((i, index) => (
            <ListItem key={index}>
              <Typography fontWeight={300}>{i}</Typography>
            </ListItem>
          ))}
        </List>
        <Button variant="contained" size="large" endIcon={<ArrowForward />}>
          go
        </Button>
      </Box>
      <div id="tri-wrap">
        <div id="tri"></div>
      </div>
    </Grid>
  );
};
