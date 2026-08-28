import Link from "next/link";
import { Check } from "lucide-react";

export default function BlogOfferCard() {
  return (
    <div className="my-10 p-[2px] rounded-3xl bg-gradient-to-r from-red-500/50 via-red-600 to-red-500/50 shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.2),transparent_70%)]" />
      <div className="bg-[#0c0f1c] rounded-[22px] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 relative z-10">
        <div className="flex-grow text-center md:text-left">
          <span className="inline-flex rounded-full border border-red-500/30 bg-red-950/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-red-300 mb-3">IPTVDoor Exclusive</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Upgrade to Premium IPTVDoor</h3>
          <p className="text-stone-300 text-sm sm:text-base mb-4">
            Enjoy +50,000 live channels, +120,000 VODs, and a perfectly synced EPG with 99.9% uptime.
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-0">
            <li className="flex items-center gap-1.5 text-xs font-semibold text-stone-200">
              <Check className="w-4 h-4 text-red-500" strokeWidth={3} /> Anti-Freeze Tech
            </li>
            <li className="flex items-center gap-1.5 text-xs font-semibold text-stone-200">
              <Check className="w-4 h-4 text-red-500" strokeWidth={3} /> 4K & Full HD
            </li>
            <li className="flex items-center gap-1.5 text-xs font-semibold text-stone-200">
              <Check className="w-4 h-4 text-red-500" strokeWidth={3} /> All Devices Supported
            </li>
          </ul>
        </div>
        <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0 flex flex-col items-center">
          <Link href="/pricing" className="w-full md:w-auto rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-3.5 text-center text-sm font-bold text-white shadow-[0_4px_15px_rgba(239,68,68,0.4)] transition-all hover:scale-105 active:scale-95 inline-block">
            View Pricing Plans
          </Link>
          <span className="text-[10px] text-stone-400 mt-2 font-medium">Instant Delivery After Purchase</span>
        </div>
      </div>
    </div>
  );
}
