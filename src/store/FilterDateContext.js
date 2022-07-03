import { createContext, useState } from "react";

export const filterCtx = createContext({
    cYear: 0,
    setYear: () => { },
});
function FilterYearProvider(props) {
    const [cYear, setcYear] = useState(0);
    function setYear(nYear) {
        setcYear(nYear);
    }
    const context = {
        cYear: cYear,
        setYear: setYear,
    };
    return <filterCtx.Provider value={context}>{props.children}</filterCtx.Provider>;
}
export default FilterYearProvider;
