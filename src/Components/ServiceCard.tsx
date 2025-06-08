import { Grid, Box, Typography, List, ListItem } from "@mui/material";
import { FC } from "react";
// import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  subtitle: string;
  listItems: string[];
  background: {};
}

export const ServiceCard: FC<CardProps> = ({
  title,
  subtitle,
  listItems,
  background,
}) => {
  return (
    <Grid
      size={{ md: 6, xs: 12 }}
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
        {/* <Link className="button-link" to={"/windows"}>
          {"Go"}
        </Link> */}
      </Box>
      <div id="tri-wrap">
        <div id="tri"></div>
      </div>
    </Grid>
  );
};
