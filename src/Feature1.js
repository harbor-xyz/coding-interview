import "./Feature1.css";
function Feature1(users) {
  return (
    <div className="Feature1">
      <table className="Feature1-table">
        <thead className="Feature1-tableHeader">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody className="Feature1-tableBody">
          {users.data.map((datum) => {
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
