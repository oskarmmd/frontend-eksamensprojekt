"use client";

import TableItem from "./TableItem";
import Table1 from "@/assets/table/table_1.png";
import Table2 from "@/assets/table/table_2.png";
import Table3 from "@/assets/table/table_3.png";

const TABLES = [
  { number: 1, image: Table1 },
  { number: 2, image: Table1 },
  { number: 3, image: Table2 },
  { number: 4, image: Table1 },
  { number: 5, image: Table3 },

  { number: 6, image: Table1 },
  { number: 7, image: Table1 },
  { number: 8, image: Table2 },
  { number: 9, image: Table1 },
  { number: 10, image: Table3 },

  { number: 11, image: Table1 },
  { number: 12, image: Table1 },
  { number: 13, image: Table2 },
  { number: 14, image: Table1 },
  { number: 15, image: Table3 },
];

export default function TableGrid({ selectedTable, onSelect, reservedTables = [], loading }) {
  return (
    <div>
      <h2 className="text-white font-bold text-xl mb-8 tracking-wide">BOOK A TABLE</h2>

      {loading ? (
        <p className="text-white text-sm">Loading tables…</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {TABLES.map((table) => (
            <TableItem key={table.number} number={table.number} image={table.image} selected={selectedTable === table.number} disabled={reservedTables.includes(table.number)} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}
