import type { AppointmentInfo } from "../components/dashboard/dashboard.types"



//businessName fake data
const businessName = "Lakeview Home Services"

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