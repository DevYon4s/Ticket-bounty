import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketpath } from "@/path";
import Link from "next/link";
import { Ticket } from "@/features/tickets/types";
import { LucideSquareArrowOutUpRight } from "lucide-react";

type Ticketprops = {
    ticket: Ticket

}
const Ticketitem = ({ ticket }: Ticketprops) => {
    const detailbutton = (
        <Button asChild variant="outline" size="icon">
            <Link href={ticketpath(ticket.id.toString())} className={buttonVariants({ variant: "link" })}><LucideSquareArrowOutUpRight /></Link>
        </Button>
    )

    return (
        <div className="w-full flex max-w-[420px] gap-x-1"
        >
            <Card key={ticket.id} className=" w-full  ">
                <CardHeader>
                    <CardTitle className=" truncate">{ticket.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <span className="line-clamp-3">{ticket.description}</span>
                </CardContent>

            </Card>
            <div className="flex flex-col gap-y-1">
                {detailbutton}

            </div>
        </div>
    )
}

export { Ticketitem };
