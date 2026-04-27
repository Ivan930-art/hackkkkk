
// AI tutor matching
async function findTutor() {
  const res = await fetch("/api/ai", {
    method: "POST",
    body: JSON.stringify({
      topic: topic.value
    })
  });

  const data = await res.json();
  result.innerText = data.reply;
}

// load sessions
async function loadSessions() {
  const res = await fetch("/api/sessions");
  const data = await res.json();

  sessions.innerHTML = data.map(s => `<p>${s}</p>`).join("");
}

loadSessions();