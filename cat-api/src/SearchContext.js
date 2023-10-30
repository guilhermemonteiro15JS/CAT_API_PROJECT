import React, { createContext, useContext, useState, useEffect} from "react";

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);


  const fetchBooks = async () => {
    try {
      const response = await fetch("/api/v1/book/");
      const result = await response.json();
      console.log(result);

      const booksData = result.data;
      console.log(booksData);

      return booksData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const handleSearch = (inputValue) => {
    setSearchInput(inputValue);
  
       const filteredBooks = data.filter((book) =>
       book.title.toLowerCase().includes(inputValue.toLowerCase())
     );
     setFilteredData(filteredBooks);
  };

  useEffect(() => {
    fetchBooks().then((booksData) => {
      setData(booksData);
    });
  }, []);


  return (
    <SearchContext.Provider value={{ searchInput, filteredData, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};