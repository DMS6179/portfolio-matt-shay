import type { DashboardProps } from "./dashboard.types";
import StatCard from "./StatCards";

function Dashboard({ businessName, todaysAppointments, completedAppointments, statCards, alerts }: DashboardProps) {

    return ( 
    <div>
      <h1>{businessName}</h1>
      <p> {new Date().toLocaleDateString("en-US", { weekday : "long", month : "long", day : "numeric" })} &middot; Your business at a glance. </p>
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
    </div>
  
  );
}

export default Dashboard;

