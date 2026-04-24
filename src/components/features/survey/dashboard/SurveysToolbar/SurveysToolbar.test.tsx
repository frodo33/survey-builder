import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { SurveysToolbar } from "./SurveysToolbar.component";
import type { SurveysToolbarProps } from "./SurveysToolbar.types";

describe("SurveysToolbar", () => {
  const createProps = (overrides: Partial<SurveysToolbarProps> = {}): SurveysToolbarProps => ({
    search: "",
    onSearchChange: vi.fn(),
    view: "grid",
    onViewChange: vi.fn(),
    isDisabled: false,
    ...overrides,
  });

  const renderComponent = (overrides: Partial<SurveysToolbarProps> = {}) => {
    const props = createProps(overrides);

    render(<SurveysToolbar {...props} />);

    return props;
  };

  const renderControlled = (overrides: Partial<SurveysToolbarProps> = {}) => {
    const onSearchChange = vi.fn();

    const props = createProps({
      ...overrides,
      onSearchChange,
    });

    const Wrapper = () => {
      const [search, setSearch] = useState(props.search);

      return (
        <SurveysToolbar
          {...props}
          search={search}
          onSearchChange={(value) => {
            onSearchChange(value);
            setSearch(value);
          }}
        />
      );
    };

    render(<Wrapper />);

    return { onSearchChange };
  };

  describe("search", () => {
    it("should display provided search value when component is rendered", () => {
      renderComponent({ search: "customer survey" });

      expect(screen.getByRole("textbox")).toHaveValue("customer survey");
    });

    it("should notify parent with updated search value when user types", async () => {
      const user = userEvent.setup();
      const { onSearchChange } = renderControlled();

      await user.type(screen.getByRole("textbox"), "test");

      expect(onSearchChange).toHaveBeenLastCalledWith("test");
    });

    it("should disable search field when component is disabled", () => {
      renderComponent({ isDisabled: true });

      expect(screen.getByRole("textbox")).toBeDisabled();
    });
  });

  describe("view mode", () => {
    it("should notify parent when grid view is selected", async () => {
      const user = userEvent.setup();
      const onViewChange = vi.fn();

      renderComponent({
        view: "list",
        onViewChange,
      });

      await user.click(screen.getByRole("button", { name: /grid/i }));

      expect(onViewChange).toHaveBeenCalledWith("grid");
    });

    it("should notify parent when list view is selected", async () => {
      const user = userEvent.setup();
      const onViewChange = vi.fn();

      renderComponent({
        view: "grid",
        onViewChange,
      });

      await user.click(screen.getByRole("button", { name: /list/i }));

      expect(onViewChange).toHaveBeenCalledWith("list");
    });

    it("should mark current view as pressed", () => {
      renderComponent({ view: "grid" });

      expect(screen.getByRole("button", { name: /grid/i })).toHaveAttribute("aria-pressed", "true");
    });
  });
});