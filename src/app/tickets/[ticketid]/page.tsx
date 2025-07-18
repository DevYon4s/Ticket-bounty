import { tickets } from "@/data";
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
            <div>

                <h1 className="text-2xl font-bold text-red-600"
                >Ticket not found</h1>
            </div>
        );
    }

    return (
        <>
            <h1>Tickets {ticket.title}</h1>
            <p>Status: {ticket.status}</p>
            <Link href={ticketspath()}
            >Back to tickets</Link>
        </>
    );
}
export default TicketId;