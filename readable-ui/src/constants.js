import Enum from "enum";

export const EntryTypes = new Enum(["list", "master", "comment"]);

export const SortBy = new Enum(["voteScore", "timestamp"]);
