import React, { useEffect, useReducer } from "react";
import MigrationMap from "./MigrationMap";
import migrationsReducer from "../reducers/migrations";
import appReducer from "../reducers/app";
import TopNav from "./TopNav";
import MigrationsList from "./MigrationsList";
import MigrationsContext from "../context/migrations-context";
import AppContext from "../context/app-context";

// Data
import Migrations from "../data/migrations";

// Boostrap components:
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// Styles
import "../scss/app.scss";

// Inital app data
const initApp = {
  center: { lat: 4, lng: 20 },
  zoom_level: 3,
  autoplay_index: 0
};

const App = () => {
  const [migrations, dispatch] = useReducer(migrationsReducer, []);
  const [app, dispatchApp] = useReducer(appReducer, initApp);

  useEffect(() => {
    // Just once, populate the migrations object with all
    // valid data
    const usableMigrations = Migrations.filter(migration => {
      // No starting location form migration
      if (
        migration.migration_city_start === "" &&
        migration.migration_country_start === ""
      ) {
        return false;
      }
      // No ending location for migration
      if (
        migration.migration_steps.length === 0 &&
        migration.migration_end_location_year === ""
      ) {
        return false;
      }
      return true;
    });
    if (usableMigrations) {
      dispatch({ type: "POPULATE_MIGRATIONS", migrations: usableMigrations });
    }
  }, []);

  return (
    <MigrationsContext.Provider value={{ migrations, dispatch }}>
      <AppContext.Provider value={{ app, dispatchApp }}>
        <TopNav></TopNav>
        <Container fluid>
          <Row>
            <Col xs={3}>
              <MigrationsList />
            </Col>
            <Col xs={9}>
              <MigrationMap zoom={2} center={{ lat: 4, lng: 30 }} />
            </Col>
          </Row>
        </Container>
      </AppContext.Provider>
    </MigrationsContext.Provider>
  );
};

export default App;
