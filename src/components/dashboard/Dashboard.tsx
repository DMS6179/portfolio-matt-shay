import type { DashboardProps } from "./dashboard.types";

function Dashboard({ businessName, todaysAppointments, completedAppointments, statCards, alerts }: DashboardProps) {
    
    return (
    <div>
      Dashboard placeholder
      <h1>{businessName}</h1>
    </div>
  
  );
}

export default Dashboard;

