import type { AppointmentInfo } from "./dashboard.types";

function AppointmentRow( {appTime, name, service, location, status}: Omit<AppointmentInfo, "id" | "createdAt">) {

    return (
        <div> {appTime}, {name}, {service}, {location}, {status} </div>
    )
};

export default AppointmentRow