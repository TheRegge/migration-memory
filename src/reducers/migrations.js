const migrationsReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_MIGRATIONS":
      return {
        ...state,
        migrations: action.migrations
      };
    case "SET_CURRENT_MIGRATION":
      return {
        ...state,
        currentMigration: action.migration
      };
    default:
      return state;
  }
};

export { migrationsReducer as default };
