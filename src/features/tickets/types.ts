export type Ticket = {
  id: number;
  title: string;
  description: string;
  status: "open" | "closed";
};
