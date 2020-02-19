import React, { useContext } from "react";
import { strip_spaces, make_migration_steps } from "../utilities";
import MigrationsContext from "../context/migrations-context";
import AppContext from "../context/app-context";

import Collapse from "react-bootstrap/Collapse";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MigrationsListItem = ({ migration }) => {
  const { dispatch } = useContext(MigrationsContext);
  const { app, dispatchApp } = useContext(AppContext);
  const paper_themes = migration.paper_themes.split(",");

  const handleCardTitleClick = student_name => {
    dispatchApp({
      type: "SET_FOCUSED_STUDENT",
      student_name: student_name
    });
  };

  const handleViewMigrationClick = () => {
    const steps = make_migration_steps(migration);
    dispatch({
      type: "SET_CURRENT_MIGRATION",
      migration: steps
    });
  };

  const isOpen =
    strip_spaces(app.student_name) === strip_spaces(migration.student_name);
  const isHidden = !isOpen && app.autoplay;

  return (
    <>
      {!isHidden && (
        <Card>
          <Card.Body>
            <Card.Title
              onClick={() => handleCardTitleClick(migration.student_name)}
            >
              {migration.student_name}
            </Card.Title>
            <Collapse in={isOpen}>
              <div>
                <Card.Subtitle>{migration.paper_title}</Card.Subtitle>
                <Card.Text>{migration.research_questions}</Card.Text>
                <Card.Text>
                  {paper_themes.map(theme => (
                    <span key={migration.student_email + theme}>
                      <Badge variant="dark">{theme}</Badge>
                    </span>
                  ))}
                </Card.Text>
                <div>
                  <Button
                    disabled={app.autoplay}
                    variant="outline-primary"
                    onClick={() => handleViewMigrationClick()}
                  >
                    View migration
                  </Button>
                </div>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export { MigrationsListItem as default };
