import { ArrowForward } from "@mui/icons-material";
import { Grid, Box, Button, Typography, List, ListItem } from "@mui/material";

export const ServiceCard = () => {
    const listItems: string[] = [];
    const t = "qwerty"
  return (
    
    <Grid size={6}>
      <Box className="service">
        <Typography variant="h4">{t}</Typography>
        <List>
          {listItems.map((i) => (
            <ListItem>{i}</ListItem>
          ))}

          <ListItem>Weeding and Bed Maintentance</ListItem>
          <ListItem>Fertilizing, Pruning, and Hedge Trimming</ListItem>
        </List>
        <Button
          id="maint-go"
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
        >
          go
        </Button>
      </Box>
    </Grid>
    
  );
};
