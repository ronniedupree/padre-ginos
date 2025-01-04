import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now!</h1>
      <Pizza name="Pepperoni" description="pep, cheese, and stuff" />
      <Pizza name="Hawaiian" description="ham, pineapple, and stuff" />
      <Pizza name="Americano" description="french fries, hot dogs, and stuff" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
