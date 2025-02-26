import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Turning Ideas into Reality... One Line of Code at a Time!" ,

          "Software Developer",
          "FrontEnd Developer",
          "Passionate. Curious. Ready to Grow."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
