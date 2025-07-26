import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { tickets } from "@/data";
import { Ticketitem } from "@/features/tickets/components/ticket-item";
import { tickets as ticketspath } from "@/path";
import Link from "next/link";
type TicketId = {
    params: Promise<{
        ticketid: string;
    }>;
};
async function TicketId({ params }: TicketId) {
    const { ticketid } = await params;
    const ticket = tickets.find((t) => t.id.toString() === ticketid);

    if (!ticket) {
        return (

            <Placeholder label="The ticket you are looking for does not exist."
                button={
                    <Button asChild variant="outline">
                        <Link href={ticketspath()}>Back to tickets</Link>
                    </Button>
                }
            />


        );
    }

    return (
        <>
            <div className="flex justify-center"> <Ticketitem ticket={ticket} isdetail /></div>


        </>
    );
}
export default TicketId;