import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import LogItem from "./LogItem";
const App = () => {
  // temp logs
  const [logs, setLogs] = useState([
    {
      id: 1,
      text: "This is log",
      priority: "low",
      user: "rahul",
      create: new Date().toString(),
    },
    {
      id: 2,
      text: "This is log",
      priority: "moderate",
      user: "rahul",
      create: new Date().toString(),
    },
    {
      id: 3,
      text: "This is log",
      priority: "high",
      user: "rahul",
      create: new Date().toString(),
    },
  ]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Log Text</th>
            <th>User</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <LogItem />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
