/**
 * Remove spaces from a string
 * @param {string} str The string to process
 */
export const strip_spaces = str => {
  if (undefined === str) return "";
  return str.split(" ").join("");
};

/**
 * Extract migration steps from a migration object
 * @param {object} migration a migration object as defined in data/migration.js
 * @return {array} An array of objects usable as map geocoordinates and with name of location
 */
export const make_migration_steps = migration => {
  let steps = [];
  if (migration.migration_city_start) {
    steps.push(migration.migration_city_start);
  } else if (migration.migration_country_start) {
    steps.push(migration.migration_country_start);
  }

  for (let i = 0; i < migration.migration_steps.length; i++) {
    steps.push(migration.migration_steps[i].location);
  }

  if (migration.migration_end_location_year !== "") {
    steps.push(migration.migration_end_location_year.location);
  }
  return steps;
};

/**
 * Generates a random integer between zero and max
 * @param {integer} max The maximum size of the generated integer
 * @return {integer}
 */
export const get_random_int = max => {
  return Math.floor(Math.random() * Math.floor(max));
};
