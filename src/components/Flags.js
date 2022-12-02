import React from "react";
import ReactCountryFlag from "react-country-flag";

function ExampleComponent({ flag }) {
  return (
    <div>
      {/* <ReactCountryFlag countryCode={flag} /> */}
      <ReactCountryFlag
        countryCode={flag}
        svg
        style={{
          width: "2em",
          height: "2em",
        }}
        title={flag}
      />
    </div>
  );
}

export default ExampleComponent;
