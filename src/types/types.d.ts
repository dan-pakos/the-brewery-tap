type TYPE =
  | "micro"
  | "nano"
  | "regional"
  | "brewpub"
  | "large"
  | "planning"
  | "bar"
  | "contract"
  | "proprietor"
  | "closed";

type SORT = "asc" | "desc";

type sortOption = {
  label: string;
  key: string;
  order: SORT;
};

export type { TYPE, SORT, sortOption };
