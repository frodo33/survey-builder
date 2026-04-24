import type { ViewVariant } from "../dashboard.types";

export type SurveysToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void
  view: ViewVariant
  onViewChange: (view: ViewVariant) => void
  isDisabled: boolean
}