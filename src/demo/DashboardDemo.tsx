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
            value: 120 
        },
            {
            id : "app0002",
            createdAt : "2026-06-19T09:00:00",
            appTime:    "2026-06-19T14:30:00",
            name : "Hannah Shay",
            service : "Carpet Cleaning Services",
            location : "456 Faker Street, Fakeville, USA",
            status : "pending" ,
            value: 45
        },
            {
            id : "app0003",
            createdAt : "2026-06-19T10:00:00",
            appTime:    "2026-06-19T15:40:00",
            name : "Joe Shay",
            service : "Wall Cleaning Services",
            location : "789 Fakest Street, Fakeington, USA",
            status : "pending" ,
            value: 68 
        }, 

        //Fake Completed Appointments

        {
            id : "app0004",
            createdAt : "2026-06-17T08:00:00",
            appTime:    "2026-06-18T16:15:00",
            name : "Billie Shay",
            service : "Landscaping Services",
            location : "321 Fake Street, Fakeopolus, USA",
            status : "confirmed" ,
            value: 145 
        }]

        //Fake Completed Appointments

        const fakeCompletedAppointments: AppointmentInfo[] = [{
            id : "app0005",
            createdAt : "2026-06-17T08:00:00",
            appTime:    "2026-06-18T10:15:00",
            name : "Pat Shay",
            service : "Floor Cleaning Services",
            location : "111 Fakester Street, Fake City, USA",
            status : "completed" , 
        }]

        //Fake Stat Cards

        const fakeStatCards: StatInfo[] = [
            //Todays Revenue
            {
                id : "S20001",
                label : "Todays Revenue" ,
                number : 1346,
                subLine : "Down 3% from yesterday",
                isCurrency: true
            },    
            //Weekly Revenue
            {
                id : "S20002",
                label : "Weekly Revenue" ,
                number : 2460,
                subLine : "Up 12% from last week",
                isCurrency: true
            },    
            //This Month
            {
                id : "S20003",
                label : "This Month" ,
                number : 12365,
                subLine : "6 new costumers",
                isCurrency: true
            },    
            //Average Job Value
            {
                id : "S20004",
                label : "Open Requests" ,
                number : 5,
                subLine : "31 total customers"
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