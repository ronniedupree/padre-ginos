import { expect, test, vi } from "vitest";
// import { render } from "@testing-library/react";
import { renderHook, waitFor } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "calabrese",
  name: "The calabrese Pizza",
  category: "Supreme",
  description: "lol pizza from Calabria",
  image: "/public/pizzas/calabrese.webp",
  size: { S: 12.24, M: 16.25, L: 20.25 }
};

// function getPizzaOfTheDay() {
//   let pizza;

//   function TestComponent() {
//     pizza = usePizzaOfTheDay();
//     return null;
//   }

//   render(<TestComponent />);

//   return pizza;
// }

test("gives null when first called", async() => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  expect(result.current).toBe(null);
});

test("to call the API and give back the pizza of the day", async () => {
    fetch.mockResponseOnce(JSON.stringify(testPizza));
    const { result } = renderHook(() => usePizzaOfTheDay());
    await waitFor(() => {
      expect(result.current).toEqual(testPizza);
    })
    expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day");
})