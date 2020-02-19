import React, { useState, useEffect, useContext } from "react";
import MigrationsContext from "../context/migrations-context";
import AppContext from "../context/app-context";
import { make_migration_steps } from "../utilities";
import uuidv4 from "uuid/v4";
import { Map as LeafletMap, Marker, TileLayer, Tooltip } from "react-leaflet";
// Leaflet Plugins:
import AntPath from "react-leaflet-ant-path";

const MigrationMap = () => {
  const [onMapMarkers, setOnMapMarkers] = useState([]);
  const { app, dispatchApp } = useContext(AppContext);
  const { migrations, dispatch } = useContext(MigrationsContext);
  const migration = migrations.currentMigration;
  const closeZoomLevel = 5;
  const farZoomLevel = 2;
  const antOptions = {
    color: "red",
    weight: 4,
    hardwareAccelerated: true,
    dashArray: [25, 50]
  };

  const setup_new_migration = () => {
    setTimeout(() => {
      dispatchApp({
        type: "SET_AUTOPLAY_INDEX",
        max: migrations.migrations.length
      });
      const nextMigration = migrations.migrations[app.autoplay_index];
      dispatchApp({
        type: "SET_FOCUSED_STUDENT",
        student_name: nextMigration.student_name
      });
      const migrationSteps = make_migration_steps(nextMigration);
      dispatch({
        type: "SET_CURRENT_MIGRATION",
        migration: migrationSteps
      });
    }, 4000);
  };

  const dispatchMapSettings = ({ zoom_level, center }) => {
    dispatchApp({
      type: "SET_ZOOM_LEVEL",
      zoom_level: zoom_level
    });
    dispatchApp({
      type: "SET_CENTER",
      center: center
    });
  };

  const runMigrationMap = migration => {
    if (migration && migration.length > 0) {
      setOnMapMarkers([migration[0]]);
      dispatchMapSettings({
        zoom_level: closeZoomLevel,
        center: { lat: migration[0].lat, lng: migration[0].lng }
      });
      let i = 1;
      const interval = setInterval(() => {
        setOnMapMarkers(onMapMarkers => [...onMapMarkers, migration[i]]);
        dispatchMapSettings({
          zoom_level: closeZoomLevel,
          center: { lat: migration[i].lat, lng: migration[i].lng }
        });
        i++;
        if (i > migration.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            resetMap();
            if (app.autoplay) {
              setup_new_migration();
            }
          }, 3000);
        }
      }, 2000);
    }
  };

  useEffect(() => {
    runMigrationMap(migration);
  }, [migration]);

  useEffect(() => {
    if (app.autoplay) {
      setup_new_migration();
    } else {
      setOnMapMarkers([]);
      resetMap();
      dispatch({
        type: "SET_CURRENT_MIGRATION",
        migration: []
      });
    }
  }, [app.autoplay]);

  const resetMap = () => {
    dispatchMapSettings({
      zoom_level: farZoomLevel,
      center: { lat: 4, lng: 20 }
    });
  };

  return (
    <LeafletMap
      id="myMap"
      animate={true}
      center={app.center}
      zoom={app.zoom_level || 2}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {onMapMarkers.map((loc, index) => {
        return (
          <div key={uuidv4()}>
            <AntPath positions={onMapMarkers} options={antOptions} />
            <Marker position={loc} attribution="test">
              <Tooltip opacity={1} permanent={app.zoom_level > 2}>
                {index + 1}. {loc.name}
              </Tooltip>
            </Marker>
          </div>
        );
      })}
    </LeafletMap>
  );
};

export default MigrationMap;
