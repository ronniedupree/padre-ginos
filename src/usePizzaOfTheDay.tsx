import { useState, useEffect, useDebugValue } from 'react';
import type { Pizza } from './types';

export const usePizzaOfTheDay = (): Pizza | undefined => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState<Pizza>();
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.name}: ${pizzaOfTheDay.id}` : "Loading ...")

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();

      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};