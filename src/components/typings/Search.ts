export interface SearchProps {
  type: "small" | "large" | "table";
  onChange: (text: string) => void;
  value?: string;
  placeholder: string;
  showSearchIcon?: boolean;
  className?: string;
  clearable?: boolean;
  onClear?: () => void;
}

export interface SearchState {
  searchValue: string;
}
