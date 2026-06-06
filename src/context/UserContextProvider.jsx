/* eslint-disable react/prop-types */

import {
  about,
  backendexperience,
  databasesxperience,
  frontendexperience,
  projects,
} from "../data";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider
      value={{
        about,
        frontendexperience,
        backendexperience,
        databasesxperience,
        projects,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
