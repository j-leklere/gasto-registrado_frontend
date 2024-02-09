"use client";
import Balances from "./Balances";
import Incomes from "./Incomes";

export default function TopBar() {
  return (
    <>
      <div className="top-bar">
        <Balances />
        <Incomes />
      </div>
    </>
  );
}
