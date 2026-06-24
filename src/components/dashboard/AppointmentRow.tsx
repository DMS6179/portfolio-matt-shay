import type { AppointmentInfo } from "./dashboard.types";
import { useState, useEffect, useRef } from "react";

function AppointmentRow({id, appTime, name, service, location, status, onStatusChange, onStage, isStaged, stagedStatus, onRolodexOpen }: Omit<AppointmentInfo, "createdAt"> & { 
    onStatusChange: (id: string, newStatus: "pending" | "confirmed" | "completed") => void
    onStage: (id: string, newStatus: "pending" | "confirmed" | "completed") => void
    onRolodexOpen: (isOpen: boolean) => void
    isStaged: boolean
    stagedStatus: "pending" | "confirmed" | "completed" | null
    }) {

    //Variables and useStates//
    const [isRolodexOpen, setIsRolodexOpen] = useState(false)  
    const allStatuses = ["pending", "confirmed", "completed"] as const
    const otherStatuses = allStatuses.filter(currStatus => currStatus !== status)
    const rolodexRef = useRef<HTMLDivElement>(null)
    

    //Functions//
    function getTime(time: string) {
            const timeFormatted =new Date(time).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit'
            })
        return timeFormatted
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (rolodexRef.current && !rolodexRef.current.contains(event.target as Node)) {
            setIsRolodexOpen(false)
            onRolodexOpen(false)
            }
        }

        if (isRolodexOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isRolodexOpen, onRolodexOpen])

    return (
        <div className="grid grid-cols-5 gap-4 px-5 py-3 text-sm text-[#2C4A6E] dark:text-[#F0EBE3] items-center">
            <p className="font-mono text-xs text-[#7BA7BC]">{getTime(appTime)}</p>
            <p className="font-medium">{name}</p>
            <p className="text-[#4A6480] dark:text-[#A8BCC8] ">{service}</p>
            <p className="text-[#4A6480] dark:text-[#A8BCC8] ">{location}</p>
                <div className="relative w-fit flex items-center">
                    <span
                    onClick={() => {
                        setIsRolodexOpen(true)
                        onRolodexOpen(true) 
                        console.log("Pill Clicked")}}
                    className={`font-mono text-xs px-2 py-1 rounded-lg w-fit cursor-pointer
                        ${status === "pending" ? "bg-[#FDF5E8] dark:bg-[#7A5C1A] text-[#7A5C1A] dark:text-white border border-[#C4A882]" : ""}
                        ${status === "confirmed" ? "bg-[#E8F0E8] dark:bg-[#2A5C2A] text-[#2A5C2A] dark:text-white border border-[#7AAD7A]" : ""}
                        ${status === "completed" ? "bg-[#E8EEF4] dark:bg-[#1E4070] text-[#1E4070] dark:text-white border border-[#7BA7BC]" : ""}
                    `}>
                        {status}
                    </span>
                    {isRolodexOpen && (
                        <div ref={rolodexRef} className="absolute top-7 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-1 p-1 rounded-lg">
                            
                            {otherStatuses.map( option => 
                            // option is each of the two other statuses
                            <button className={`font-mono text-xs px-2 py-1 rounded-lg w-full cursor-pointer
                                ${option === "pending" ? "bg-[#FDF5E8]/60 hover:bg-[#FDF5E8] dark:bg-[#7A5C1A]/60 dark:hover:bg-[#7A5C1A] text-[#7A5C1A] dark:text-white border border-[#C4A882]" : ""}
                                ${option === "confirmed" ? "bg-[#E8F0E8]/60 hover:bg-[#E8F0E8] dark:bg-[#2A5C2A]/60 dark:hover:bg-[#2A5C1A] text-[#2A5C2A] dark:text-white border border-[#7AAD7A]" : ""}
                                ${option === "completed" ? "bg-[#E8EEF4]/60 hover:bg-[#E8EEF4] dark:bg-[#1E4070]/60 dark:hover:bg-[#1E4070] text-[#1E4070] dark:text-white border border-[#7BA7BC]" : ""}
                            `}
    
                                key={option}
                                onClick={() => {
                                    onStage(id, option)
                                    setIsRolodexOpen(false)
                                    onRolodexOpen(false)
                            
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