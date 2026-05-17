import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "27717926486";

  const message = encodeURIComponent(
    "Hi Cavaro, I would like to enquire about a premium website or IT support service."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-3 rounded-full border border-yellow-500/30 bg-gradient-to-r from-yellow-400 to-amber-700 px-5 py-4 font-semibold text-black shadow-2xl shadow-yellow-900/40 transition hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat With Cavaro</span>
    </a>
  );
}