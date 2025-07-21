import { Separator } from "./ui/separator";

type headingprops = {
    title: string,
    description?: string
}

const Heading = ({ title, description }: headingprops) => {
    return <>
        <div >
            <h1 className="text-2xl font-bold ">{title}</h1>
            {description && (
                <p className="text-sm ">{description}</p>)}
        </div>
        <Separator />
    </>;
}
export { Heading };