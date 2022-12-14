import Card from "../UI/Card";
import { useEffect, useState } from "react";

import styles from "./AvailableMeals.module.css";
import { Item } from "../../types/types";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_DATABASE_URL!}/meals.json`
        );

        if (!response.ok) {
          throw new Error("something went wrong");
        }

        const data = await response.json();

        const mealsData = Object.keys(data).map((mealId: string): Item => {
          return {
            id: mealId,
            name: data[mealId].name,
            description: data[mealId].description,
            price: data[mealId].price,
          };
        });

        setMeals(mealsData);
        setIsLoading(false);
      } catch (err: any) {
        setIsLoading(false);
        setHttpError(err.message);
      }
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={styles["meals-loading"]}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles["meals-error"]}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
