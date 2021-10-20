import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";

const MealDetail = () => {
  const [meal, setMeal] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const handelClick = () => {
    history.push(`/restaurant`);
  };

  useEffect(() => {
    axios
      .get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setMeal(res.data.meals))
      .catch((err) => toast.error(err.massage));
  }, [id]);

  return (
    <Container>
      <Card sx={{ maxWidth: 550 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {meal[0]?.strMeal.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={meal[0]?.strMeal}
          subheader={
            new Date().getDate() +
            "-" +
            new Date().getMonth() +
            "-" +
            new Date().getFullYear()
          }
        />
        <CardMedia
          component="img"
          height="250"
          image={meal[0]?.strMealThumb}
          alt={meal[0]?.strMeal}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {meal[0]?.strInstructions}
          </Typography>
        </CardContent>
        <Button variant="contained" onClick={handelClick}>
          Back to Restaurant
        </Button>
      </Card>
    </Container>
  );
};

export default MealDetail;
