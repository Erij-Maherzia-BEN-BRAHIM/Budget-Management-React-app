import { createContext, useState } from "react";

export const addCtx = createContext({
  tabDepenses: [],
  ajoutNewDepense: () => {},
});
function AddDepenseContextProvider(props) {
  const [tabDep, setTabDepenses] = useState([]);
  function ajoutNewDepense(newDepense) {
    setTabDepenses((prev) => {
      return [...prev, newDepense];
    });
    console.log(tabDep);
  }
  const context = {
    tabDepenses: tabDep,
    ajoutNewDepense: ajoutNewDepense,
  };
  return <addCtx.Provider value={context}>{props.children}</addCtx.Provider>;
}
export default AddDepenseContextProvider;
