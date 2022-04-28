const data = [
  {
    firstName: "Prakash",
    lastName: "Sanker",
    age: 29,
    weight: 174,
  },
  {
    firstName: "Kunal",
    lastName: "Agarwal",
    age: 34,
    weight: 190,
  },
  {
    firstName: "Abhishek",
    lastName: "Chatterjee",
    age: 32,
    weight: 155,
  },
  {
    firstName: "Ben",
    lastName: "Hur",
    age: 64,
    weight: 220,
  },
  {
    firstName: "Eden",
    lastName: "Hazard",
    age: 27,
    weight: 162,
  },
];

function Feature1() {
  return (
    <div className="Feature1">
      <table className="Feature1-body">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datum) => {
            console.log("DATUM");
            console.log(datum);
            console.log(datum.firstName);
            return (
              <tr>
                <td>{datum.firstName}</td>
                <td>{datum.lastName}</td>
                <td>{datum.age}</td>
                <td>{datum.weight}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Feature1;
