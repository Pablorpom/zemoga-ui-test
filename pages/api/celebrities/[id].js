const celebritiesVotes = {
  "001": {
    positive: 23,
    negative: 36,
  },
  "002": {
    positive: 418,
    negative: 324,
  },
  "003": {
    positive: 45,
    negative: 97,
  },
  "004": {
    positive: 18,
    negative: 3,
  },
  "005": {
    positive: 1237,
    negative: 894,
  },
  "006": {
    positive: 118,
    negative: 45,
  },
};

export default function handler(req, res) {
  if (req.method === "PUT") {
    const { id } = req.query;
    const { vote } = JSON.parse(req.body);
    if (vote === "positive") {
      celebritiesVotes[id].positive++;
    } else if (vote === "negative") {
      celebritiesVotes[id].negative++;
    }
    res.status(200).json(celebritiesVotes[id]);
  }
  if (req.method === "GET") {
    const { id } = req.query;
    res.status(200).json(celebritiesVotes[id]);
  }
  res.status(500);
}
