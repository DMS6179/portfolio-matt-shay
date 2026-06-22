import type { DashboardProps } from "./dashboard.types";
import StatCard from "./StatCards";
import AppointmentRow from "./AppointmentRow";

function Dashboard({ businessName, todaysAppointments, completedAppointments, statCards, alerts }: DashboardProps) {
    function getGreeting(){
      const now = new Date()
      const hour = now.getHours()
      if (hour < 12) {return "Good Morning, "}
      else if (hour < 17) {return "Good Afternoon, "}
      else {return "Good Evening, "}
    }

    return (
      <div className="bg-[#F7F4EF] min-h-screen p-8">

        {/* Greeting */}
        <h1 className="font-serif text-3xl font-light text-[#2C4A6E] mb-1">
          {getGreeting()}{businessName}
        </h1>
        <p className="text-xs font-mono text-[#C4A882] tracking-wide mb-6">
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} &middot; Your business at a glance.
        </p>

        {/* Alert Banner */}
        {alerts.map(alert => (
          <div key={alert.id} className="flex items-start justify-between bg-[#FDF5E8] border border-[#C4A882] rounded px-5 py-3 mb-6">
            <p className="text-sm text-[#7A5C1A] italic">
              "{alert.message}"
            </p>
            <button className="ml-4 text-[#C4A882] text-xs font-mono tracking-wide hover:text-[#2C4A6E] shrink-0">
              Dismiss
            </button>
          </div>
        ))}

        {/* Stat Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {statCards.map(statCard => (
            <StatCard
              key={statCard.id}
              label={statCard.label}
              number={statCard.number}
              subLine={statCard.subLine}
              isCurrency = {statCard.isCurrency}
            />
          ))}
        </div>

        {/* Today's Appointments */}
        <h2 className="font-mono text-m text-[#2C4A6E] tracking-wide uppercase mb-4">
          Today's appointments
        </h2>
        <div className="bg-white border border-[#C4A882] rounded mb-8">
          {todaysAppointments.map((appointment, index) => (
            <div key={appointment.id} className={index !== 0 ? "border-t border-[#E8EEF4]" : ""}>
              <AppointmentRow
                appTime={appointment.appTime}
                name={appointment.name}
                service={appointment.service}
                location={appointment.location}
                status={appointment.status}
              />
            </div>
          ))}
        </div>

        {/* Completed Jobs */}
        <h2 className="font-mono text-m text-[#2C4A6E] tracking-wide uppercase mb-4">
          Recent completed jobs
        </h2>
        <div className="bg-white border border-[#C4A882] rounded">
          {completedAppointments.map((appointment, index) => (
            <div key={appointment.id} className={index !== 0 ? "border-t border-[#E8EEF4]" : ""}>
              <AppointmentRow
                appTime={appointment.appTime}
                name={appointment.name}
                service={appointment.service}
                location={appointment.location}
                status={appointment.status}
              />
            </div>
          ))}
        </div>

      </div>
    );
}

export default Dashboard;