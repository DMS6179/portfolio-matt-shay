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
    notes? : string
} 

//Stat Card Types

export type StatInfo = {
    label : string,
    number : number,
    subLine : string
}

//Alert Type Set

export type AlertInfo = {
    id : string,
    message : string
}
