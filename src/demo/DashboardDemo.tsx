import type { AppointmentInfo, StatInfo, AlertInfo } from "../components/dashboard/dashboard.types";
import Dashboard  from "../components/dashboard/Dashboard";



function DashboardDemo() {
        //businessName fake data
        const fakeBusinessName = "Lakeview Home Services"

        //Fake Appointments Pending

        const fakePendingAppointments: AppointmentInfo[] = [{
            id : "app0001",
            createdAt : "2026-06-19T08:00:00",
            appTime:    "2026-06-19T14:00:00",
            name : "Matt Shay",
            service : "Home Services",
            location : "123 Fake Street, Faketown, USA",
            status : "pending" , 
        },
            {
            id : "app0002",
            createdAt : "2026-06-19T09:00:00",
            appTime:    "2026-06-19T14:30:00",
            name : "Hannah Shay",
            service : "Carpet Cleaning Services",
            location : "456 Faker Street, Fakeville, USA",
            status : "pending" , 
        },
            {
            id : "app0003",
            createdAt : "2026-06-19T10:00:00",
            appTime:    "2026-06-19T15:40:00",
            name : "Joe Shay",
            service : "Wall Cleaning Services",
            location : "789 Fakest Street, Fakeington, USA",
            status : "pending" , 
        }]

        //Fake Completed Appointments

        const fakeCompletedAppointments: AppointmentInfo[] = [{
            id : "app0004",
            createdAt : "2026-06-17T08:00:00",
            appTime:    "2026-06-18T10:15:00",
            name : "Pat Shay",
            service : "Wall Cleaning Services",
            location : "111 Fakester Street, Fake City, USA",
            status : "completed" , 
        }]

        //Fake Stat Cards

        const fakeStatCards: StatInfo[] = [
            //Todays Jobs
            {
                label : "Todays Jobs" ,
                number : 8,
                subLine : "3 Pending, 5 Confirmed"
            },    
            //This Week
            {
                label : "This Week" ,
                number : 2460,
                subLine : "Up 12% from last week"
            },    
            //New Customers
            {
                label : "New Customers" ,
                number : 3,
                subLine : "This Month"
            },    
            //Average Job Value
            {
                label : "Average Job Value" ,
                number : 438,
                subLine : "Last 30 Days"
            },
        ]
        //Fake Alerts

        const fakeAlerts: AlertInfo[] = [
            {
                id : "A10001",
                message : "3 pending appointments today that are not yet confirmed, would you like to confirm them now?"

            },

        ]

        return (
            <Dashboard
            todaysAppointments = {fakePendingAppointments}
            completedAppointments = {fakeCompletedAppointments}
            statCards = {fakeStatCards}
            alerts = {fakeAlerts}
            businessName = {fakeBusinessName}
            />
        )
}

export default DashboardDemo;