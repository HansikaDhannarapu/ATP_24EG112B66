import { createContext, useState } from "react";

//create context provider object
export const counterContextObj = createContext();

function ContextProvider({ children }) {
  // states
  const [counter1, setCounter1] = useState(10);
  const [counter2, setCounter2] = useState(20);
  const [counter3, setCounter3] = useState(30);

  // functions
  const changeCounter1 = () => {
    setCounter1(counter1 + 1);
  };

  const changeCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  const changeCounter3 = () => {
    setCounter3(counter3 + 1);
  };

  return (
    <counterContextObj.Provider
      value={{
        counter1,
        counter2,
        counter3,
        changeCounter1,
        changeCounter2,
        changeCounter3,
      }}
    >
      {children}
    </counterContextObj.Provider>
  );
}

export default ContextProvider;