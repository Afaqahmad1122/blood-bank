/** Shared response shapes. Feature-specific types live in `features/<name>/types`. */
export type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};

export type Role = "donor" | "hospital" | "staff" | "admin";
