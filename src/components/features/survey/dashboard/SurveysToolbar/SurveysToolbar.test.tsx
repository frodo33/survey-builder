import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { SurveysToolbar } from "./SurveysToolbar.component";

describe("SurveysToolbar", () => {
  const renderToolbar = (props = {}) => {
    render(
      <SurveysToolbar
        search=""
        view="grid"
        isDisabled={false}
        onSearchChange={vi.fn()}
        onViewChange={vi.fn()}
        {...props}
      />,
    );
  };

  describe("search input", () => {
    it("should display provided value", () => {
      renderToolbar({ search: "customer survey" });

      expect(screen.getByRole("textbox")).toHaveValue("customer survey");
    });

    it("should call onSearchChange with typed value", async () => {
      const user = userEvent.setup();
      const onSearchChange = vi.fn();
    
      renderToolbar({ onSearchChange });
    
      await user.type(screen.getByRole("textbox"), "t");
    
      expect(onSearchChange).toHaveBeenCalledWith("t");
    });

    it("should disable input when isDisabled is true", () => {
      renderToolbar({ isDisabled: true });

      expect(screen.getByRole("textbox")).toBeDisabled();
    });
  });

  describe("view switch", () => {
    it("should call onViewChange when grid view is selected", async () => {
      const user = userEvent.setup();
      const onViewChange = vi.fn();

      renderToolbar({
        view: "list",
        onViewChange,
      });

      await user.click(screen.getByRole("button", { name: /grid/i }));

      expect(onViewChange).toHaveBeenCalledWith("grid");
    });

    it("should call onViewChange when list view is selected", async () => {
      const user = userEvent.setup();
      const onViewChange = vi.fn();

      renderToolbar({
        view: "grid",
        onViewChange,
      });

      await user.click(screen.getByRole("button", { name: /list/i }));

      expect(onViewChange).toHaveBeenCalledWith("list");
    });

    it("should mark active view as selected", () => {
      renderToolbar({ view: "grid" });

      const gridButton = screen.getByRole("button", { name: /grid/i });

      expect(gridButton).toHaveAttribute("aria-pressed", "true");
    });
  });
});