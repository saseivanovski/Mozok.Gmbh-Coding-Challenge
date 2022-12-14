import React, { useState, useEffect } from "react";
import Flags from "./Flags";
import axios from "axios";

function Nationality({ name }) {
  const [nationality, setNationality] = useState({});

  const handleNames = (name) => {
    if (name === null) {
      return false;
    } else {
      return name.split(" ")[0];
    }
  };

  const api = "8fe5855675704707db87c3ac3a9ed324";
  useEffect(() => {
    if (name) {
      axios
        .get(
          `https://api.nationalize.io?name=${handleNames(name)}&apikey=${api}`
        )
        .then((res) => setNationality(res.data));
    }
  }, [name]);

  if (!nationality.country) {
    return null;
  }

  return <Flags flag={nationality.country[0].country_id} />;
}

export default Nationality;
