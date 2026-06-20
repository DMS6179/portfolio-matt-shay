import type { StatInfo } from "./dashboard.types"

function StatCard({id, label, number, subLine}: Omit<StatInfo, "id">) {
    return (
    <div>{label}, {number}, {subLine}</div>
)}

export default StatCard