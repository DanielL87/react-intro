"use client";
import { useState } from "react";
import defaultPlanets from "../lib/alien-planets.js";

export default function AlienPlanets() {
  const [planets, setPlanets] = useState(defaultPlanets);
  return (
    <main>
      <p>3</p>
      <hr />
      <h3>Alien Planets</h3>
      <div id="planet-container">
        {planets.map((planet) => {
          return (
            <div key={planet.id} className="planet-card">
              <p className="planet-emoji">{planet.emoji}</p>
              <p className="planet-name">{planet.name}</p>
              <p className="planet-description">
                {planet.name} is {planet.distanceFromEarth} from Earth.
                {planet.hasLife ? (
                  <span>{planet.name} is believed to have life.</span>
                ) : (
                  <span>{planet.name} is believed to not have life.</span>
                )}
                The atmosphere of {planet.name} is
                {planet.atmosphere}.
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
