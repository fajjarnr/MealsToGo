import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider value={{ restaurants: [] }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
