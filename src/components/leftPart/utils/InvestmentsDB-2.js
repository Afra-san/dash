import { HomeIcon, PencilIcon, TicketIcon } from "@heroicons/react/outline";

export const InvestDB = [
  {
    id:0,
    title: "Gadget",
    desc: "California ",
    price: " 200.22 ",
    upOrDown: "up",
    percent: "1.04%",
    icon: <TicketIcon className="invest-icon" />,
  },
  {
    id:1,
    title: "House",
    desc: "Manulife",
    price: "890.00",
    upOrDown: "down",
    percent: "5.04%",
    icon: <HomeIcon className="invest-icon" />,
  },
  {
    id:2,
    title: "Education",
    desc: "design",
    price: " 58.99 ",
    upOrDown: "up",
    percent: "10.2%",
    icon: <PencilIcon className="invest-icon" />,
  },
];
