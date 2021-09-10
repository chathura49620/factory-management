import React, { useEffect, useState } from "react";

const Clock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  const date = new Date();
  return (
    <React.Fragment>
      <div style={{ fontSize: "55px", color: "#06846C" }}>{clockState}</div>
      <div style={{ fontSize: "20px" }}>{date.toLocaleDateString()}</div>
    </React.Fragment>
  );
};

export default Clock;
