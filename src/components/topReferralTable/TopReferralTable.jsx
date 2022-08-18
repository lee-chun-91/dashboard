import React, { useState, useEffect, useRef, useMemo } from "react";
import apis from "../../apis/apis";
import Widget from "../common/Widget";

// ag-grid-react
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const TopReferralTable = () => {
  const gridRef = useRef();

  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState();
  const groupDisplayType = "singleColumn";

  console.log(columnDefs);

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  const autoGroupColumnDef = {
    headerName: "Country(IP) > Region(IP) > City(IP)",
    minWidth: 270,
  };

  useEffect(() => {
    apis.getTableInfo().then((response) => {
      // 1. rowData 할당
      let rawData = response.data.data.rows.map((value, index) => {
        return Object.assign({}, value);
      });

      const data = rawData.map((item) => {
        return {
          ip_country: item["0"],
          ip_region: item["1"],
          ip_city: item["2"],
          unique_view: Number(item["3"]),
        };
      });

      setRowData(data);

      // 2. columnDefs 설정
      let columnDefs = response.data.data.headers.map((item, index) => {
        if (index !== 3) {
          return {
            field: item.key,
            rowGroup: true,
            pivot: true,
            hide: true,
          };
        } else {
          return { field: item.key, aggFunc: "sum" };
        }
      });

      setColumnDefs(columnDefs);
    });
  }, []);

  return (
    <Widget title={"Top Referral"}>
      <div className="ag-theme-alpine" style={{ height: "80%", width: "80%" }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          groupDisplayType={groupDisplayType}
          autoGroupColumnDef={autoGroupColumnDef}
        ></AgGridReact>
      </div>
    </Widget>
  );
};

export default TopReferralTable;
