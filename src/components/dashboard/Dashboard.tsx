import type { DashboardProps } from "./dashboard.types";
import StatCard from "./StatCards";
import AppointmentRow from "./AppointmentRow";
import { useState } from "react";

function Dashboard({ businessName, todaysAppointments, completedAppointments, statCards, alerts }: DashboardProps) {
    
  const [dismissedAlerts, setDismissedAlerts] = useState<Set<string>> (new Set())
  const [appointments, setAppointments] = useState([...todaysAppointments, ...completedAppointments])
  const [stagedAppointmentId, setStagedAppointmentId] = useState<string | null> (null)
  const [stagedStatus, setStagedStatus] = useState<"pending" | "confirmed" | "completed" | null> (null)
  const [dailyRevenue, setDailyRevenue] = useState(1346)
  const [monthlyRevenue, setMonthlyRevenue] = useState(12365)
  const [isAnyRolodexOpen, setIsAnyRolodexOpen] = useState(false)

  function getGreeting(){
      const now = new Date()
      const hour = now.getHours()
      if (hour < 12) {return "Good Morning, "}
      else if (hour < 17) {return "Good Afternoon, "}
      else {return "Good Evening, "}
    }

    function handleDismiss (id: string) {
      setDismissedAlerts(new Set([...dismissedAlerts, id]))
    }

    function handleStatusChange(id: string, newStatus: "pending" | "confirmed" | "completed"): void {
      setAppointments(appointments.map(app => app.id === id ? { ...app, status: newStatus } : app))
      setStagedAppointmentId(null)
      setStagedStatus(null)
      const foundAppointment = appointments.find(app => app.id === id)
      const appointmentValue = foundAppointment?.value ?? 0
      if (newStatus === "completed") { 
        setDailyRevenue(dailyRevenue + appointmentValue)
        setMonthlyRevenue(monthlyRevenue + appointmentValue)
      }
    }

    function handleStage(id: string, newStatus: "pending" | "confirmed" | "completed") {
      setStagedAppointmentId(id)
      setStagedStatus(newStatus)
    }

    return (
      <div className="bg-[#F7F4EF] dark:bg-[#1A2535] min-h-screen p-8">
        {isAnyRolodexOpen && (
          <div 
            className="fixed inset-0 bg-black/80 z-40"
            onClick={() => setIsAnyRolodexOpen(false)}
          />
        )}
        {/* Greeting */}
        <h1 className="font-serif text-3xl font-light text-[#2C4A6E] dark:text-[#F0EBE3] mb-1">
          {getGreeting()}{businessName}
        </h1>
        <p className="text-xs font-mono text-[#C4A882] tracking-wide mb-6">
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} &middot; Your business at a glance.
        </p>

        {/* Alert Banner */}
        {alerts.filter(alert => !dismissedAlerts.has(alert.id)).map(activeAlert => (
          <div key={activeAlert.id} className="flex items-start justify-between bg-[#FDF5E8]dark:bg-[#2A3A2A] border border-[#C4A882] rounded px-5 py-3 mb-6">
            <p className="text-sm text-[#7A5C1A] italic">
              "{activeAlert.message}"
            </p>
            <button className="ml-4 text-[#C4A882] text-xs font-mono tracking-wide hover:text-[#2C4A6E] dark:text-[#F0EBE3] shrink-0" onClick={() => handleDismiss(activeAlert.id)}>
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
              number={statCard.label === "Todays Revenue" ? dailyRevenue 
                : statCard.label === "This Month" ? monthlyRevenue 
                : statCard.number}
              subLine={statCard.subLine}
              isCurrency = {statCard.isCurrency}
          />
          ))}
        </div>

        {/* Today's Appointments */}
        <h2 className="font-mono text-m text-[#2C4A6E] dark:text-[#F0EBE3] tracking-wide uppercase mb-4">
          Today's appointments
        </h2>
        <div className="bg-white dark:bg-[#243548] border border-[#C4A882] rounded mb-8">
          {appointments.filter(app => app.status !== "completed").map((appointment, index) => (
            <div key={appointment.id} className={index !== 0 ? "border-t border-[#E8EEF4]" : ""}>
              <AppointmentRow
                id={appointment.id}
                appTime={appointment.appTime}
                name={appointment.name}
                service={appointment.service}
                location={appointment.location}
                status={appointment.status}
                onStatusChange={handleStatusChange}
                onStage={handleStage}
                isStaged={stagedAppointmentId === appointment.id}
                stagedStatus={stagedStatus}
                onRolodexOpen={setIsAnyRolodexOpen}
              />
            </div>
          ))}
        </div>

        {/* Completed Jobs */}
        <h2 className="font-mono text-m text-[#2C4A6E] dark:text-[#F0EBE3] tracking-wide uppercase mb-4">
          Recent completed jobs
        </h2>
        <div className="bg-white dark:bg-[#243548] border border-[#C4A882] rounded">
          {appointments.filter(app => app.status === "completed").map((appointment, index) => (
            <div key={appointment.id} className={index !== 0 ? "border-t border-[#E8EEF4]" : ""}>
              <AppointmentRow
                id={appointment.id}
                appTime={appointment.appTime}
                name={appointment.name}
                service={appointment.service}
                location={appointment.location}
                status={appointment.status}
                onStatusChange={handleStatusChange}
                onStage={handleStage}
                isStaged={stagedAppointmentId === appointment.id}
                stagedStatus={stagedStatus}
                onRolodexOpen={setIsAnyRolodexOpen}
              />
            </div>
          ))}
        </div>

      </div>
    );
}

export default Dashboard;