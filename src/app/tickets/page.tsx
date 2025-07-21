
import { tickets } from "@/data";

import { Heading } from "@/components/heading";
import { Ticketitem } from "@/features/tickets/components/ticket-item";
const Page = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title="Ticket" description="all tickets in one place" />
            <div className="flex-1  flex flex-col items-center gap-y-3">
                {tickets.map((ticket) => (
                    <Ticketitem
                        key={ticket.id}
                        ticket={ticket}
                    />
                ))}

            </div>
        </div>
    );
};

export default Page;