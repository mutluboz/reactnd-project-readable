import Enum from "enum";

export const PostTypes = new Enum(["list", "master", "comment"]);

export const SortBy = new Enum(["voteScore", "timestamp"]);
