import { useState } from "react";
import { mockData } from "../../utils/constants";

const List = () => {
  const [elements, setElements] = useState(mockData);

  return (
    <div>
      <h3> List </h3>
      {elements.map((item) => (
        <div key={item.id} data-testid="record">
          {item.id}: {item.name}
        </div>
      ))}
      <button
        onClick={() => {
          setElements([
            ...elements,
            {
              id: 4,
              name: "abhinav",
            },
          ]);
        }}
      >
        Add to list
      </button>
      <button
        onClick={() => {
          setElements(elements.filter((item) => item.id != 2));
        }}
      >
        Remove from list
      </button>
    </div>
  );
};

export default List;
