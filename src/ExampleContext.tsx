import { createContext, useState } from "react";
import { User } from "./models/user";

interface ExampleContextData {
  counter: number;
  setCounter: (counter: number) => void;
  user: User;
  setUser: (user: User) => void;
}

export const ExampleContext = createContext<ExampleContextData>({
  counter: 0,
  setCounter(_) {},
  user: {
    name: "",
    age: 0,
  },
  setUser(_) {},
});

interface ProviderProps {
  children: JSX.Element;
}

function ExampleContextProvider({ children }: ProviderProps) {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
  });

  return (
    <ExampleContext.Provider value={{ counter, setCounter, user, setUser }}>
      {children}
    </ExampleContext.Provider>
  );
}

export default ExampleContextProvider;
