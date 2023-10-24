
import { CustomTableProps } from "@/app/types";
import React from "react";

const Table: React.FC<CustomTableProps> = React.memo(({ data, columns }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="border-[1px] border-stroke">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.key} className="border-[1px] border-stroke">
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
});

Table.displayName = "Table";
export default Table;
