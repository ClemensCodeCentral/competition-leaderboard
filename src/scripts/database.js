const KEY_CONTESTANTS = 'contestants';
const KEY_ROUNDS = 'rounds';
const KEY_PROBLEMS = 'problems';

function fetchRounds() {
  const db = firebase.firestore();
  return db.collection(KEY_ROUNDS).orderBy('round').get();
}

function fetchLeaderboardOnce() {
  const db = firebase.firestore();
  return db.collection(KEY_CONTESTANTS).orderBy('points', 'name').get()
    .then(deserialize);
}

/**
 * Attaches a realtime listener to the leaderboard.
 */
function monitorLeaderboard(callback) {
  const db = firebase.firestore();
  db.collection(KEY_CONTESTANTS).orderBy('points', 'name')
    .onSnapshot((snap) => {
      callback(snap.data());
    });
}

function deserialize(querySnapshot) {
  const result = [];
  querySnapshot.forEach((doc, index, array) => {
    // Generate places based on position
    const contestant = array[index];
    contestant.place = index + 1;
    result.push(contestant);
  });
  return result;
}

export {
  fetchRounds,
  fetchLeaderboardOnce,
  monitorLeaderboard,
}