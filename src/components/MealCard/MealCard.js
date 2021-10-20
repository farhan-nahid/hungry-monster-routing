import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useHistory } from "react-router-dom";

const MealCard = ({
  meal: { strMeal, strMealThumb, strInstructions, idMeal },
}) => {
  const history = useHistory();

  const handelClick = () => {
    history.push(`/meal/${idMeal}`);
  };

  return (
    <Grid item lg={4} md={6} sm={12} xs={12}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="250"
          image={strMealThumb}
          alt={strMeal}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {strMeal}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {strInstructions.slice(0, 50)}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/meal/${idMeal}`}>See Detail</Link>
          <Link to={`/meal/${idMeal}`}>
            <Button size="small">See Detail</Button>
          </Link>
          <Button variant="contained" onClick={handelClick}>
            See Detail
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MealCard;
