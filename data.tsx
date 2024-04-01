type PlayersProps = {
    id: number;
    image: string;
    title: string;
    events: string;
    sport: string;
}

type CollectionsProps = {
    id: number;
    image: string;
    title: string;
    address: string;
    collectionTitle: string;
}

export const Players: PlayersProps[] = [
    {
        id: 1,
        image: "/player1.png",
        title: "Sacramento River Cats",
        events: "48 Events",
        sport: "Baseball"
    },
    {
        id: 2,
        image: "/player2.png",
        title: "Las Vegas Aviators",
        events: "28 Events",
        sport: "Baseball"
    },
    {
        id: 3,
        image: "/player3.png",
        title: "New Jersey Devils",
        events: "15 Events",
        sport: "Ice Hockey"
    },
    {
        id: 4,
        image: "/player2.png",
        title: "Las Vegas Aviators",
        events: "28 Events",
        sport: "Baseball"
    }
];


export const Collections: CollectionsProps[] = [
    {
        id: 1,
        image: "/card1.png",
        title: "Las Vegas Aviators",
        address: "Las Vegas Ballpark, Las Vegas, Nevada",
        collectionTitle: "Take Flight Collection"
    },
    {
        id: 2,
        image: "/card2.png",
        title: "Sacramento River Cats",
        address: "Sutter Health Park, Sacramento, California",
        collectionTitle: "Orange Collection"

    },
    {
        id: 3,
        image: "/card1.png",
        title: "Las Vegas Aviators",
        address: "Las Vegas Ballpark, Las Vegas, Nevada",
        collectionTitle: "Take Flight Collection"
    }
];