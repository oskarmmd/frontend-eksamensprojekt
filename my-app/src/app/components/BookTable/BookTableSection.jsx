// src/components/book-table/BookTableSection.js
"use client";

import { useEffect, useState } from "react";
import TableGrid from "./TableGrid";
import ReservationForm from "./ReservationForm";

export default function BookTableSection() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await fetch("http://localhost:4000/reservations");
        if (!res.ok) throw new Error();
        const data = await res.json();
        setReservations(data);
      } catch (err) {
        console.error("Failed to fetch reservations", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const reservedTableNumbers = reservations.map((r) => r.tableNumber);

  const handleReservationCreated = (reservation) => {
    setReservations((prev) => [...prev, reservation]);
  };

  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-20">
        {/* TABLE GRID */}
       <div className="w-full max-w-5xl">
        <TableGrid
          selectedTable={selectedTable}
          onSelect={setSelectedTable}
          reservedTables={reservedTableNumbers}
          loading={loading}
        />
         </div>
        {/* FORM – you can wrap this if you want it wider */}
        <div className="w-full max-w-5xl">
          <ReservationForm
            tableNumber={selectedTable}
            onReservationCreated={handleReservationCreated}
          />
        </div>
      </div>
    </section>
  );
}
