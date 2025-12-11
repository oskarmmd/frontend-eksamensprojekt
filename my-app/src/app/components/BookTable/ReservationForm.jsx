"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import EmailField from "../EmailField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function ReservationForm({ tableNumber, onReservationCreated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const [status, setStatus] = useState(null); // "success" | "error"
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = (statusValue, msg) => {
    setStatus(statusValue);
    setMessage(msg);
    setDialogOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tableNumber) {
      openDialog("error", "Please select a table before reserving.");
      return;
    }

    if (!name || !email || !guests || !date) {
      openDialog("error", "Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:4000/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tableNumber,
          name,
          email,
          guests: Number(guests),
          date,
          phone,
          comment,
        }),
      });

      if (!res.ok) throw new Error();

      const created = await res.json();
      if (onReservationCreated) onReservationCreated(created);

      setName("");
      setEmail("");
      setGuests("");
      setDate("");
      setPhone("");
      setComment("");

      openDialog("success", "Your table has been reserved – we look forward to seeing you at Night Club.");
    } catch {
      openDialog("error", "The table is already booked on this date, or something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-white font-bold text-xl mb-8 tracking-wide">BOOKING FORM</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* NAME + EMAIL */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-sm mb-2">Your Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-transparent border border-white px-4 py-3 text-white focus:outline-none" />
          </div>

          <EmailField email={email} onEmailChange={setEmail} label="Your Email" inputClassName="h-[3.2rem]" />
        </div>

        {/* TABLE + GUESTS */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-sm mb-2">Table Number</label>
            <input type="text" readOnly value={tableNumber || ""} placeholder="Pick a table above" className="w-full bg-transparent border border-white px-4 py-3 text-white focus:outline-none" />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Number of Guests</label>
            <input type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full bg-transparent border border-white px-4 py-3 text-white focus:outline-none" />
          </div>
        </div>

        {/* DATE + PHONE */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-sm mb-2">Select Date</label>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={date ? dayjs(date) : null}
                onChange={(newValue) => {
                  if (newValue) {
                    setDate(newValue.format("YYYY-MM-DD"));
                  }
                }}
                minDate={dayjs()}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    InputProps: {
                      sx: {
                        color: "white",
                        border: "1px solid white",
                        borderRadius: "0",
                        height: "3.1rem",
                      },
                    },
                    InputLabelProps: {
                      sx: { color: "white" },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Your Contact Number</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-transparent border border-white px-4 py-3 text-white focus:outline-none" />
          </div>
        </div>

        {/* COMMENT */}
        <div>
          <label className="block text-white text-sm mb-2">Your Comment</label>
          <textarea rows="5" value={comment} onChange={(e) => setComment(e.target.value)} className="w-full bg-transparent border border-white px-4 py-3 text-white resize-none focus:outline-none" />
        </div>

        {/* SUBMIT */}
        <div className="flex flex-col items-center mt-8 ">
          <div className="h-px w-40 bg-white mb-4 " />
          <button type="submit" disabled={loading} className={`uppercase tracking-[0.25em] text-white text-sm transition ${loading ? "opacity-60 cursor-not-allowed" : "hover:text-[var(--pink)]"}`}>
            {loading ? "RESERVING…" : "RESERVE"}
          </button>
          <div className="h-px w-40 bg-white mt-4" />
        </div>
      </form>

      {/* HEADLESS UI DIALOG */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/80" />

        <div className="fixed inset-0 flex items-center justify-center px-4">
          <Dialog.Panel className="bg-black border border-white px-8 py-10 max-w-md w-full text-center">
            <Dialog.Title className="text-white text-xl font-bold mb-4">{status === "success" ? "RESERVATION CONFIRMED" : "RESERVATION FAILED"}</Dialog.Title>

            <p className="text-white mb-8">{message}</p>

            <button onClick={() => setDialogOpen(false)} className="uppercase tracking-[0.25em] text-white hover:text-[var(--pink)]">
              CLOSE
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
