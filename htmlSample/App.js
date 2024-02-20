const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Hello world from React"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "parent1" }, [
    React.createElement("h1", { id: "heading" }, "I am h1 element"),
    React.createElement("h2", { id: "heading" }, "I am h2 element"),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", { id: "heading" }, "I am h1 element"),
    React.createElement("h2", { id: "heading" }, "I am h2 element"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
