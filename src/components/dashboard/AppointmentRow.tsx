import type { AppointmentInfo } from "./dashboard.types";

function AppointmentRow({ appTime, name, service, location, status }: Omit<AppointmentInfo, "id" | "createdAt">) {
  return (
    <div className="grid grid-cols-5 gap-4 px-5 py-3 text-sm text-[#2C4A6E] items-center">
      <p className="font-mono text-xs text-[#7BA7BC]">{appTime}</p>
      <p className="font-medium">{name}</p>
      <p className="text-[#4A6480]">{service}</p>
      <p className="text-[#4A6480]">{location}</p>
      <span className={`font-mono text-xs px-2 py-1 rounded w-fit
        ${status === "pending" ? "bg-[#FDF5E8] text-[#7A5C1A] border border-[#C4A882]" : ""}
        ${status === "confirmed" ? "bg-[#E8F0E8] text-[#2A5C2A] border border-[#7AAD7A]" : ""}
        ${status === "completed" ? "bg-[#E8EEF4] text-[#1E4070] border border-[#7BA7BC]" : ""}
      `}>
        {status}
      </span>
    </div>
  );
}

export default AppointmentRow;