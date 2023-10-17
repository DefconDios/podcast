import { createContext, useContext, ReactNode, useState } from "react";
import { MItunesData, Result } from "./core/models/itunes-data.model";

interface AppContextType {
  searchResults: MItunesData | null; // Define el tipo de tus resultados
  setResults: (results: MItunesData | null) => void;
  selectedSong: Result | null;
  setSelectedSong: (row: Result | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [searchResults, setSearchResults] = useState<MItunesData | null>(null);
  const [selectedSong, setSelectedSong] = useState<Result | null>(null);

  const setResults = (results: MItunesData | null) => {
    setSearchResults(results);
  };

  return (
    <AppContext.Provider value={{ searchResults, setResults, selectedSong, setSelectedSong }}>
      {children}
    </AppContext.Provider>
  );
};
