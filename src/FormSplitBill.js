import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplit }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUSer] = useState("");
  const [whoIsPaid, setWhoIsPaid] = useState("user");

  const friendExpense = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!paidByUser || !bill) return;
    onSplit(whoIsPaid === "user" ? friendExpense : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill value </label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♀️Your expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUSer(
            Number(e.target.value) > bill ? bill : Number(e.target.value)
          )
        }
      />
      <label>🧑‍🤝‍👩{selectedFriend.name}'s expense</label>
      <input type="number" value={friendExpense} disabled />
      <label>🤑Who is paying the bill?</label>
      <select value={whoIsPaid} onChange={(e) => setWhoIsPaid(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
