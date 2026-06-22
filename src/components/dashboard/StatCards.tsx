import type { StatInfo } from "./dashboard.types";

function StatCard({ label, number, subLine }: Omit<StatInfo, "id">) {
  return (
    <div className="bg-white border border-[#C4A882] rounded p-5">
      <p className="font-mono text-xs text-[#7BA7BC] tracking-wide uppercase mb-1">
        {label}
      </p>
      <p className="font-serif text-4xl font-light text-[#2C4A6E] leading-none mb-1">
        {number}
      </p>
      <p className="text-xs text-[#C4A882]">
        {subLine}
      </p>
    </div>
  );
}

export default StatCard;