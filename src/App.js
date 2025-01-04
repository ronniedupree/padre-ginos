const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Some good ass pizza",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French fries and hotdogs",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "Pineapple and ham",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
