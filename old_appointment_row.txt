import type { AppointmentInfo } from "./dashboard.types";
import { useState } from "react";

function AppointmentRow({id, appTime, name, service, location, status, onStatusChange, onStage, isStaged, stagedStatus }: Omit<AppointmentInfo, "createdAt"> & { 
    onStatusChange: (id: string, newStatus: "pending" | "confirmed" | "completed") => void
    onStage: (id: string, newStatus: "pending" | "confirmed" | "completed") => void
    isStaged: boolean
    stagedStatus: "pending" | "confirmed" | "completed" | null
    }) {

    //Variables and useStates//
    const [isRolodexOpen, setIsRolodexOpen] = useState(false)  
    const allStatuses = ["pending", "confirmed", "completed"] as const
    const otherStatuses = allStatuses.filter(currStatus => currStatus !== status)

    //Functions//
    function getTime(time: string) {
            const timeFormatted =new Date(time).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit'
            })
        return timeFormatted
    }


    return (
        <div className="grid grid-cols-5 gap-4 px-5 py-3 text-sm text-[#2C4A6E] dark:text-[#F0EBE3] items-center">
            <p className="font-mono text-xs text-[#7BA7BC]">{getTime(appTime)}</p>
            <p className="font-medium">{name}</p>
            <p className="text-[#4A6480] dark:text-[#A8BCC8] ">{service}</p>
            <p className="text-[#4A6480] dark:text-[#A8BCC8] ">{location}</p>
                <div className="relative">
                    <span
                    onClick={() => {
                        setIsRolodexOpen(true) 
                        console.log("Pill Clicked")}}
                    className={`font-mono text-xs px-2 py-1 rounded-lg w-fit cursor-pointer
                        ${status === "pending" ? "bg-[#FDF5E8] dark:bg-[#7A5C1A] text-[#7A5C1A] dark:text-white border border-[#C4A882]" : ""}
                        ${status === "confirmed" ? "bg-[#E8F0E8] dark:bg-[#2A5C2A] text-[#2A5C2A] dark:text-white border border-[#7AAD7A]" : ""}
                        ${status === "completed" ? "bg-[#E8EEF4] dark:bg-[#1E4070] text-[#1E4070] dark:text-white border border-[#7BA7BC]" : ""}
                    `}>
                        {status}
                    </span>
                    {isRolodexOpen && (
                        <div className="absolute">
                            {otherStatuses.map( option => 
                            // option is each of the two other statuses
                            <button
                                key={option}
                                onClick={() => {
                                    onStage(id, option)
                                    setIsRolodexOpen(false)
                            
                            }}> {option} 
                            </button>
                            )}
                        </div>
                    )}

                    {isStaged && (
                        <div>
                                <button onClick={() => onStatusChange(id, stagedStatus!)}>
                                    ✓ Confirm
                                </button>
                        </div>
                    )}
                </div>    
        </div>
    );
}

export default AppointmentRow;