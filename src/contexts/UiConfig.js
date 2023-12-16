import React, { useContext, useState } from "react";
const UiConfigContext = React.createContext();
const UiConfigUpdateContext = React.createContext();

export function useUiConfigContext() {
  return useContext(UiConfigContext);
}

export function useUiConfigUpdateContext() {
  return useContext(UiConfigUpdateContext);
}

export function UiConfigContextProvider({ children }) {
  const [uiConfig, setUiConfig] = useState({
    admin: {
      menu: [
        "home",
        "manage-profile",
        "manage-settings",
        "manage-users",
        "about-us",
      ],
      widget: ["daily-works", "manage-users", "manage-setting", "manage-times", "weekly-works"],
    },
    user: {
      menu: ["home", "manage-profile", "manage-settings", "about-us"],
      widget: ["daily-works", "weekly-works"],
    },
  });

  function changeUiConfig(config) {
    setUiConfig(config);
  }

  return (
    <UiConfigContext.Provider value={uiConfig}>
      <UiConfigUpdateContext.Provider value={changeUiConfig}>
        {children}
      </UiConfigUpdateContext.Provider>
    </UiConfigContext.Provider>
  );
}
