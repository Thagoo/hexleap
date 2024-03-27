interface SportsData {
  img: string;
  teamTitle: string;
  events: string;
  sport: string;
  ad: boolean;
}

interface TicketData {
  img: string;
  title: string;
  time: string;
  venue: string;
}
interface AdData {
  img: string;
  title: string;
  desc: string;
}
export const sportsData: SportsData[] = [
  {
    img: "/static/heroImage-1.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-2.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-3.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-2.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-1.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-2.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-3.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-2.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-2.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
];

export const adData: AdData[] = [
  {
    img: "/static/adImage.png",
    title: "Advertisement title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const ticketData: TicketData[] = [
  {
    img: "/static/ticket-mockup-1.png",
    title: "Las Vegas Aviators",
    time: "2024-01-03T00:00:00.000Z",
    venue: "Las Vegas Ballpark, Las Vegas, Nevada",
  },
  {
    img: "/static/ticket-mockup-2.png",
    title: "Sacramento River Cats",
    time: "2024-01-03T00:00:00.000Z",
    venue: "Sutter Health Park, Sacramento, California",
  },
  {
    img: "/static/ticket-mockup-1.png",
    title: "Las Vegas Aviators",
    time: "2024-01-03T00:00:00.000Z",
    venue: "Las Vegas Ballpark, Las Vegas, Nevada",
  },
];
