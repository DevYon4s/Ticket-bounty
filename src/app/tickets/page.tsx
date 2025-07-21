import clsx from "clsx";
import { tickets } from "@/data";
import Link from "next/link";
import { ticketpath } from "@/path";
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/heading";
const Page = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title="Ticket" description="all tickets in one place" />
            <div className="flex-1  flex flex-col items-center gap-y-3">
                {tickets.map((ticket) => (
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
                ))}

            </div>
        </div>
    );
};

export default Page;