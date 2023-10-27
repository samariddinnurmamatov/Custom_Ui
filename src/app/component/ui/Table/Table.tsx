import { CustomTableProps } from "@/app/types";
import React, { FC, memo } from "react";
import { cellClass, getColumnClassName, getRowClassName } from "./tablestyle";


const Table: FC<CustomTableProps> = memo((props) => {
  const { data, columns } = props;

  return (
      <div className="custom-table w-[70%] mx-auto">
        <div className="flex bg-gray-200 w-[100%]">
          {columns.map((column, columnIndex) => (
          <div
            key={column.key}
            className={`${cellClass} ${getColumnClassName(columnIndex)}`}
          >
            {column.header}
          </div>
        ))}
      </div>
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex w-[100%] ${getRowClassName(rowIndex)}`}
        >
          {columns.map((column, columnIndex) => (
            <div
              key={column.key}
              className={`${cellClass} ${getColumnClassName(columnIndex)}`}
            >
              {row[column.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});

Table.displayName = "Table";
export default Table;
