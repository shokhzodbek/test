import React, { useState } from "react";
import { Table, Input } from "antd";
import axios from "axios";
import useTableSearch from "../components/UseTableSearch";
import "antd/dist/antd.css";
const { Search } = Input;
export const userColumns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price"
      },
     
    
    ];
    

const fetchData = () => {
 let data =[
 {name:"Olma",price:"10 ming"},
 {name:"Olcha",price:"13 ming"},
 {name:"Nok",price:"20 ming"},
 {name:"Banan",price:"15 ming"},
 {name:"Ananas",price:"14 ming"},
 {name:"Anor",price:"12 ming"},]
  return { data };
};

export default function App() {
  const [searchVal, setSearchVal] = useState(null);

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchData
  });

  return (
    <>
      <Search
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search"
        enterButton
        style={{
          position: "sticky",
          top: "0",
          left: "0",
          width: "200px",
          marginTop: "2vh"
        }}
      />
      <br /> <br />
      <Table
        rowKey="name"
        dataSource={filteredData}
        columns={userColumns}
        loading={loading}
        pagination={false}
      />
    </>
  );
}