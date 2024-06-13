import React, { useContext, useState } from "react";
import { dataContext } from "./TableSource.jsx";
import { Table } from "antd";

const Information = () => {
  const { pokemons } = useContext(dataContext);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
    },
  ];

  return (
    <div>
      {/* <h1>Hello, {data.name}</h1>
      <p>{data.description}</p> */}

      <Table
        dataSource={pokemons}
        columns={columns}
        rowKey={(record) => record.name}
      />
    </div>
  );
};

export default Information;
