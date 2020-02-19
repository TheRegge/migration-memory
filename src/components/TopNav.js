import React, { useContext } from "react";

import AppContext from "../context/app-context";
import MigrationContext from "../context/migrations-context";

import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const TopNav = () => {
  const { app, dispatchApp } = useContext(AppContext);
  const { migrations } = useContext(MigrationContext);
  const handleAutoplayClick = () => {
    dispatchApp({
      type: "TOGGLE_AUTOPLAY"
    });
    dispatchApp({
      type: "SET_AUTOPLAY_INDEX",
      max: migrations.migrations.length
    });
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        {"Migration Memory:"}
        <span className="text-muted"> Student Sample</span>
      </Navbar.Brand>
      <Nav className="mr-auto">
        {app.student_name && (
          <Nav.Item className="text-success">
            Showing: {app.student_name}
          </Nav.Item>
        )}
      </Nav>
      <Button
        variant={app.autoplay ? "outline-danger" : "outline-success"}
        onClick={() => handleAutoplayClick()}
      >
        Auto Play {app.autoplay ? "ON" : "OFF"}
      </Button>
    </Navbar>
  );
};
export default TopNav;
