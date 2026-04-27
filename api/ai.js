export default function handler(req, res) {
  try {
    const body =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body || {};

    const topic = body.topic || "";

    let reply = "Match found: general student tutor available.";

    if (topic.toLowerCase().includes("math")) {
      reply = "Match found: strong algebra/calculus peer available.";
    }

    if (topic.toLowerCase().includes("code")) {
      reply = "Match found: JavaScript / Python student tutor available.";
    }

    return res.status(200).json({ reply });

  } catch (err) {
    console.log("API ERROR:", err);

    return res.status(500).json({
      reply: "Server error occurred",
      error: err.message
    });
  }
}