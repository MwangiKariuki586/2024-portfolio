import { useEffect, useState } from "react";

import UserContext from "./UserContext";

import axios from "axios";
import {
  aboutinfo,
  backendexperienceinfo,
  databasesexperienceinfo,
  frontendexperienceinfo,
  projectsinfo,
} from "../vaiables";

const UserContextProvider = ({ children }) => {
  const [about, setAbout] = useState([]);
  const [frontendexperience, setFrontendexperience] = useState([]);
  const [backendexperience, setBackendexperience] = useState([]);
  const [databasesxperience, setDatabasesexperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const fetchAboutinfo = async () => {
    try {
      const res = await axios.get(aboutinfo);
      //console.log(res.data);
      setAbout(res.data[0]);
    } catch (err) {
      //console.log(err);
    }
    // axios
    //   .get(aboutinfo)
    //   .then((res) => {
    //     setAbout(res.data[0]);
    //     console.log(res.data[0]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const fetchFrontendexperience = () => {
    axios
      .get(frontendexperienceinfo)
      .then((res) => {
        setFrontendexperience(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const fetchBackendexperience = () => {
    axios
      .get(backendexperienceinfo)
      .then((res) => {
        setBackendexperience(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const fetchDatabasesexperience = () => {
    axios
      .get(databasesexperienceinfo)
      .then((res) => {
        setDatabasesexperience(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const fetchProjects = () => {
    axios
      .get(projectsinfo)
      .then((res) => {
        //console.log(res.data);
        setProjects(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  useEffect(() => {
    fetchAboutinfo();
    fetchFrontendexperience();
    fetchBackendexperience();
    fetchDatabasesexperience();
    fetchProjects();
  }, []);

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
