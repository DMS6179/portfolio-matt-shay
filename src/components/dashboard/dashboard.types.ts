//Dashboard types only used in /src/dashboard 


//Appointment Types

export type AppointmentInfo =  {
    id : string,
    createdAt : string,
    appTime: string,
    name : string,
    service : string,
    location? : string,
    status : "pending" | "confirmed" | "completed" ,
    notes? : string,
    value?: number
} 

//Stat Card Types

export type StatInfo = {
    id : string,
    label : string,
    number : number,
    subLine : string,
    isCurrency?: boolean
}

//Alert Types

export type AlertInfo = {
    id : string,
    message : string
}


//DashboardProps Types

export type DashboardProps = {
    todaysAppointments : AppointmentInfo[],
    completedAppointments : AppointmentInfo[],
    statCards : StatInfo[],
    alerts : AlertInfo[],
    businessName : string
}