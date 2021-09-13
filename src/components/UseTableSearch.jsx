import { useState, useEffect } from "react";
const useTableSearch = ({ searchVal, retrieve }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [origData, setOrigData] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const crawl = (product, allValues) => {
      if (!allValues) allValues = [];
      for (var key in product) {
        if (typeof product[key] === "object") crawl(product[key], allValues);
        else allValues.push(product[key] + " ");
      }
      return allValues;
    };
    const fetchData = async () => {
      const { data: product } = await retrieve();
      setOrigData(product);
      setFilteredData(product);
      const searchInd = product.map(item => {
        const allValues = crawl(item);
        return { allValues: allValues.toString() };
      });
      setSearchIndex(searchInd);
      if (product) setLoading(false);
    };
    fetchData();
  }, [retrieve]);

  useEffect(() => {
    if (searchVal) {
      const reqData = searchIndex.map((item, index) => {
        if (item.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0)
          return origData[index];
        return null;
      });
      setFilteredData(
        reqData.filter(item => {
          if (item) return true;
          return false;
        })
      );
    } else setFilteredData(origData);
  }, [searchVal, origData, searchIndex]);

  return { filteredData, loading };
};

export default useTableSearch