import { useContext, createContext, useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {
      personalInfo: {},
      plan: {},
      addons: [],
    }
  );

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
      }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
