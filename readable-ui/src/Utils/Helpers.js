import { SortBy } from "../constants";

export const GroupBy = (xs, key) => {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const InitCap = text => {
  return text.toLowerCase().replace(/(?:^|\s)[a-z]/g, function(m) {
    return m.toUpperCase();
  });
};

export const TimeAgo = previous => {
  const current = Date.now();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (!previous) {
    return "just now";
  } else if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return "approximately " + Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
  }
};

const compareVoteScores = (entry1, entry2) => {
  const voteScore1 = entry1.voteScore;
  const voteScore2 = entry2.voteScore;

  let comparison = 0;
  if (voteScore1 > voteScore2) {
    comparison = 1;
  } else if (voteScore1 < voteScore2) {
    comparison = -1;
  }
  return -1 * comparison;
};

const compareTimeStamps = (entry1, entry2) => {
  const timestamp1 = entry1.timestamp;
  const timestamp2 = entry2.timestamp;

  let comparison = 0;
  if (timestamp1 > timestamp2) {
    comparison = 1;
  } else if (timestamp1 < timestamp2) {
    comparison = -1;
  }
  return -1 * comparison;
};

export const SortEntryArray = (array, sortBy) => {
  if (!sortBy) return array;
  else {
    if (sortBy === SortBy.voteScore) return [...array].sort(compareVoteScores);
    else if (sortBy === SortBy.timestamp)
      return [...array].sort(compareTimeStamps);
  }
};
