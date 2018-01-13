function fetchLeaderboardOnce() {
  const db = firebase.firestore();
  return db.collection('entrants').orderBy('points', 'name').get()
    .then(deserialize);
}

/**
 * Attaches a realtime listener to the leaderboard.
 */
function monitorLeaderboard(callback) {
  const db = firebase.firestore();
  db.collection('entrants').orderBy('points', 'name')
    .onSnapshot((snap) => {
      callback()
    });
}

function deserialize(querySnapshot) {
  const result = [];
  querySnapshot.forEach((doc, index, array) => {
    // Generate places based on position
    array[index]['place'] = index + 1;
    if (index === array.length) {
      result = array;
      break;
    }
  });
  return result;
}