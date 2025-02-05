/* eslint-disable no-unused-vars */
import React from "react";
import motion from "motion/react";

const App = () => {
  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
        className="w-52 h-52 bg-yellow-400 rounded-xl"
      ></motion.div>
      {/* <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        /> */}
    </>
  );
};

export default App;
