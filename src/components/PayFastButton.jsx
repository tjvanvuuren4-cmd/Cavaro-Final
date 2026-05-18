import React from "react";

export default function PayFastButton({
  amount = "2500",
  itemName = "Cavaro Deposit",
}) {
  const merchantId = import.meta.env.VITE_PAYFAST_MERCHANT_ID;
  const merchantKey = import.meta.env.VITE_PAYFAST_MERCHANT_KEY;

  return (
    <form
      action="https://www.payfast.co.za/eng/process"
      method="post"
    >
      <input type="hidden" name="merchant_id" value={merchantId} />
      <input type="hidden" name="merchant_key" value={merchantKey} />

      <input type="hidden" name="amount" value={amount} />
      <input type="hidden" name="item_name" value={itemName} />

      <button
        type="submit"
        className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-6 py-3 font-semibold text-black transition hover:scale-105"
      >
        Pay Deposit
      </button>
    </form>
  );
}