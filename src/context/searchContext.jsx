import { createContext, useState } from "react";

/**
 * Context for managing search data and location.
 */
export const SearchContext = createContext({
  searchData: {},
  setSearchData: () => { },
  locationData: {},
  setLocationData: () => { },
});

/**
 * Provider component for SearchContext.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components.
 */
export function SearchContextProvider({ children }) {
    const [searchData, setSearchData] = useState();
    const [locationData, setLocationData] = useState();
    return (
        <SearchContext.Provider
            value={{
                searchData,
                setSearchData,
                locationData,
                setLocationData,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}
