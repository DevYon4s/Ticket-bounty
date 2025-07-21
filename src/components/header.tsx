import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { LucideKanban } from "lucide-react";
import { homepath, tickets } from "@/path";

const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-secondary/80 backdrop-blur-md border-b border-gray-200 px-8 py-4">
            <div>

                <Link href={homepath()} className={buttonVariants({ variant: "ghost" })}>
                    <LucideKanban size={48} />
                    <h1 className="font-bold text-lg">Ticket Bounty</h1>
                </Link>

            </div>
            <div>
                <Link href={tickets()} className={buttonVariants({ variant: "default" })}>Tickets</Link>
            </div>
        </nav>)
}
export { Header };