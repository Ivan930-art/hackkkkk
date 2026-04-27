export default function handler(req, res) {
    const sessions = [
        "Math Study Group - 4PM",
        "JavaScript Practice - 6PM",
        "Physics Help Room - 7PM"
    ];

    res.status(200).json(sessions);
}