import React, { useContext } from "react";
import { strip_spaces } from "../utilities";
import MigrationsListItem from "./MigrationsListItem";
import MigrationsContext from "../context/migrations-context";
import AppContext from "../context/app-context";
// ReactBootstrap components:

const MigrationsList = () => {
  const { migrations } = useContext(MigrationsContext);
  const { app } = useContext(AppContext);
  return (
    <>
      <h4 className="text-center mt-4 mb-2">
        Project{app.autoplay ? "" : "s"}
      </h4>
      <div className="side-list">
        {migrations.migrations &&
          migrations.migrations.map(migration => {
            return (
              <MigrationsListItem
                key={strip_spaces(migration.student_name)}
                migration={migration}
              />
            );
          })}
      </div>
    </>
  );
};

export { MigrationsList as default };
