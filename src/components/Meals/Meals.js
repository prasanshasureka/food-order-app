import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (prop) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals/>
    </Fragment>
  );
};

export default Meals;
