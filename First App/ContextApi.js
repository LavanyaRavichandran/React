import { createContext } from "react";

const ContextData = createContext();
const Provider = ContextData.Provider;
const Consumer = ContextData.Consumer;

export default ContextData;
export { Provider, Consumer };
