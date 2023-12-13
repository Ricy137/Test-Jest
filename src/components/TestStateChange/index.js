import { useState, useEffect } from "react";

const TestStateChange = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return <div>{loaded && <h3> Page Loaded </h3>}</div>;
};

export default TestStateChange;

export const StateClickChange = () => {
  const [toggleTextVisible, setToggleTextVisible] = useState(false);

  return (
    <>
      {toggleTextVisible && <p> Text visible </p>}
      <button
        onClick={() => {
          setToggleTextVisible(!toggleTextVisible);
        }}
      >
        Toggle text
      </button>
    </>
  );
};
