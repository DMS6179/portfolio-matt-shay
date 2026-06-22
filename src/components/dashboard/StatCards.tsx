import type { StatInfo } from "./dashboard.types";

function StatCard({ label, number, subLine, isCurrency }: Omit<StatInfo, "id">) {

    console.log(isCurrency)
  return (
    <div className="bg-white border border-[#C4A882] rounded p-5">
      <p className="font-mono text-xs text-[#7BA7BC] tracking-wide uppercase mb-1">
        {label}
      </p>
      <p className="font-serif text-4xl font-light text-[#2C4A6E] leading-none mb-1">
        {isCurrency ? new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
            }).format(number) : number}

      </p>
      <p className="text-xs text-[#C4A882]">
        {subLine}
      </p>
    </div>
  );
}

export default StatCard;