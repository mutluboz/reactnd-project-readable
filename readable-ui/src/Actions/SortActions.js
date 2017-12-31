export const SORT_ENTRY = "SORT_ENTRY";

export const sort = (masterId, sortBy) => ({
  type: SORT_ENTRY,
  masterId,
  sortBy
});
