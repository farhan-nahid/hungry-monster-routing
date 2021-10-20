import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MealCard from "../MealCard/MealCard";

const Restaurant = () => {
  const [meals, setMeals] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => {
        if (res.data.meals !== null) {
          setMeals(res.data.meals);
        }
      })
      .catch((err) => toast.error(err.massage));
  }, [searchText]);

  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50vw" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleChange}
          id="standard-basic"
          label="Search For Meal.."
          variant="standard"
        />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        {meals.length ? (
          <Grid container spacing={4}>
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </Grid>
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Restaurant;
