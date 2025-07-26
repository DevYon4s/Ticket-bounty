import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketpath } from "@/path";
import Link from "next/link";
import { Ticket } from "@/features/tickets/types";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import clsx from "clsx";

type Ticketprops = {
    ticket: Ticket,
    isdetail?: boolean;

}
const Ticketitem = ({ ticket, isdetail }: Ticketprops) => {
    const detailbutton = (
        <Button asChild variant="outline" size="icon">
            <Link href={ticketpath(ticket.id.toString())} className={buttonVariants({ variant: "link" })}><LucideSquareArrowOutUpRight /></Link>
        </Button>
    )

    return (
        <div className={clsx("w-full flex gap-x-1", {
            " max-w-[420px] ": !isdetail,
            " max-w-[580px] ": isdetail,
        })}
        >
            <Card key={ticket.id} className=" w-full  ">
                <CardHeader>
                    <CardTitle className=" truncate">{ticket.title}</CardTitle>
                </CardHeader>
                <CardContent>

                    <span className={clsx(" whitespace-break-spaces", {
                        "line-clamp-3": !isdetail,
                    })}>{ticket.description + ticket.description + ticket.description + ticket.description + ticket.description + ticket.description + ticket.description + ticket.description}</span>
                </CardContent>

            </Card>
            {
                isdetail ? null : <div className="flex flex-col gap-y-1">
                    {detailbutton}

                </div>
            }
        </div >
    )
}

export { Ticketitem };
