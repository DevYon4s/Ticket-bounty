import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type labelprops = {
    label: string;
    icon?: React.ReactElement<any>;
    button?: React.ReactElement<any>;
}

const Placeholder = ({ label, icon = <LucideMessageSquareWarning />, button = <div></div> }: labelprops) => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-y-2">
            {cloneElement(icon, { className: "h-12 w-12 text-gray-500" })}
            <p className="text-gray-500">{label}</p>
            {button && cloneElement(button, { className: "h-10" })}
        </div>
    )
}
export { Placeholder }
