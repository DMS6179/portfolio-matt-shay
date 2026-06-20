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
      <div className="bg-[#F7F4EF] p-8 rounded-lg">
        <h1 className="font-serif text-3xl font-light text-[#2C4A6E] mb-1">
          {getGreeting()}{businessName}
        </h1>
        <p className="text-xs font-mono text-[#C4A882] tracking-wide mb-6">
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} &middot; Your business at a glance.
        </p>
      {alerts.map(alert => (
            <div key={alert.id}>
            <i> "{alert.message}" </i>
            </div>
      ))}
      {statCards.map(statCard => (
          <div key={statCard.id}>
          <StatCard
          label = {statCard.label}
          number = {statCard.number}
          subLine = {statCard.subLine}
          />
          </div>
      ))}
      {todaysAppointments.map(appointment => (
          <div key={appointment.id}>
          <AppointmentRow
          appTime = {appointment.appTime}
          name = {appointment.name}
          service = {appointment.service}
          location = {appointment.location}
          status = {appointment.status}
          />
          </div>
      ))}
      {completedAppointments.map(appointment => (
          <div key={appointment.id}>
          <AppointmentRow
          appTime = {appointment.appTime}
          name = {appointment.name}
          service = {appointment.service}
          location = {appointment.location}
          status = {appointment.status}
          />
          </div>
      ))}
    </div>
  );
}

export default Dashboard;

