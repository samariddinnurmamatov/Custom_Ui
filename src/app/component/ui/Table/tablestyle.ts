export const columnWidthClasses: Record<number, string> = {
  0: "w-[10%] font-[600]",
  1: "w-[50%]",
  2: "w-[30%]",
  3: "w-[25%]",
  4: "w-[30%]",
};

export const getColumnClassName = (columnIndex: number): string =>
  columnWidthClasses[columnIndex];

export const getRowClassName = (rowIndex: number): string => {
  return rowIndex % 2 === 1 ? "bg-table-gray" : "";
};

export const cellClass = "border-[1px] border-stroke p-[4px]";
