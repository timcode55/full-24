import React from "react";

function StatisticLine({ stat, value }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>{value}</td>
          <td>{stat}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default StatisticLine;
