import logo from "./logo.svg";
import "./App.css";
import Feature1 from "./Feature1";

const users = [
  {
    id: 1,
    firstName: "Prakash",
    lastName: "Sanker",
    age: 29,
    weight: 174,
  },
  {
    id: 2,
    firstName: "Kunal",
    lastName: "Agarwal",
    age: 34,
    weight: 190,
  },
  {
    id: 3,
    firstName: "Abhishek",
    lastName: "Chatterjee",
    age: 32,
    weight: 155,
  },
  {
    id: 4,
    firstName: "Ben",
    lastName: "Hur",
    age: 64,
    weight: 220,
  },
  {
    id: 5,
    firstName: "Eden",
    lastName: "Hazard",
    age: 27,
    weight: 162,
  },
];

function App() {
  return (
    <div className="App">
      <Feature1 data={users} />
    </div>
  );
}

export default App;
