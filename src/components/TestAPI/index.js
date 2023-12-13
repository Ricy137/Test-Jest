import { useState, useEffect } from "react";
import { FetchData } from "../../utils/services";

const TestAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData().then((data) => {
      setData(data);
    });
  });

  return (
    <div>
      {data.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default TestAPI;
