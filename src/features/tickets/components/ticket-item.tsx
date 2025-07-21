import { buttonVariants } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketpath } from "@/path";
import Link from "next/link";
import { Ticket } from "@/features/tickets/types";

type Ticketprops = {
    ticket: Ticket

}
const Ticketitem = ({ ticket }: Ticketprops) => {
    return (

        <Card key={ticket.id} className=" w-full max-w-[420px] ">
            <CardHeader>
                <CardTitle className=" truncate">{ticket.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <span className="line-clamp-3">{ticket.description}</span>
            </CardContent>
            <CardFooter>
                <CardAction>
                    <Link href={ticketpath(ticket.id.toString())} className={buttonVariants({ variant: "link" })}>View</Link></CardAction>
            </CardFooter>
        </Card>
    )
}

export { Ticketitem };
