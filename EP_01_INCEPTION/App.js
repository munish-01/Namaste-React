// const heading = React.createElement("h1",{id:"heading"},"keda bhai react!")

// nested sturcture

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", { id: "heading" }, "i am h1 element"),
      React.createElement("h1", { id: "heading" }, "i am h1 element"),
    ]),
  ],
  [
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { id: "heading" }, "i am h1 element"),
      React.createElement("h1", { id: "heading" }, "i am h1 element"),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading" }, "i am h1 element"),
//     React.createElement("h1", { id: "heading" }, "i am h1 element"),
//   ])
// );
