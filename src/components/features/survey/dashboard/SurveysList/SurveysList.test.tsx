import { render, screen } from "@testing-library/react";
import { describe, expect, it, beforeEach, vi } from "vitest";

import { useSurveys } from "@/api/surveys/hooks/useSurveys/useSurveys";
import { ROUTES } from "@/lib/routes";

import { ListWrapper, SurveysList } from "./SurveysList.component";

vi.mock("@/api/surveys/hooks/useSurveys/useSurveys", () => ({
  useSurveys: vi.fn(),
}));

vi.mock("./SurveysList.skeleton", () => ({
  SurveysListSkeleton: ({ view }: { view: "grid" | "list" }) => (
    <div data-testid="surveys-skeleton">{view}</div>
  ),
}));

vi.mock("../SurveyCard/SurveyCard.component", () => ({
  SurveyCard: ({ survey, view }: { survey: { id: string; title: string }; view: "grid" | "list" }) => (
    <article data-testid="survey-card" data-view={view}>
      {survey.title}
    </article>
  ),
}));

vi.mock("../SurveysState/SurveysState.component", () => ({
  SurveysState: ({ title, description, children }: {
    title: string;
    description: string;
    children?: React.ReactNode;
  }) => (
    <section data-testid="surveys-state">
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </section>
  ),
}));

vi.mock("@/components/shared/Button/Button.component", () => ({
  Button: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock("@/lib/i18n/navigation", () => ({
  Link: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

type SurveyDto = {
  id: string;
  title: string;
  description?: string | null;
};

const mockedUseSurveys = vi.mocked(useSurveys);
type UseSurveysResult = ReturnType<typeof useSurveys>;

describe("SurveysList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading skeleton while surveys are loading", () => {
    mockedUseSurveys.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    } as unknown as UseSurveysResult);

    render(<SurveysList search="" view="grid" />);

    expect(screen.getByTestId("surveys-skeleton")).toHaveTextContent("grid");
  });

  it("renders error state when fetching surveys fails", () => {
    mockedUseSurveys.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    } as unknown as UseSurveysResult);

    render(<SurveysList search="" view="list" />);

    expect(screen.getByText("error.title")).toBeInTheDocument();
    expect(screen.getByText("error.description")).toBeInTheDocument();
  });

  it("renders empty state with new survey link when there are no surveys", () => {
    mockedUseSurveys.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    } as unknown as UseSurveysResult);

    render(<SurveysList search="" view="list" />);

    expect(screen.getByText("empty.title")).toBeInTheDocument();
    expect(screen.getByText("empty.description")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "empty.button" })).toHaveAttribute("href", ROUTES.PRIVATE.SURVEY_NEW);
  });

  it("renders no-results state when search query does not match any survey", () => {
    const surveys: SurveyDto[] = [{ id: "1", title: "Customer Satisfaction", description: "NPS Q1" }];

    mockedUseSurveys.mockReturnValue({
      data: surveys,
      isLoading: false,
      isError: false,
    } as unknown as UseSurveysResult);

    render(<SurveysList search="test" view="grid" />);

    expect(screen.getByText("noResults.title")).toBeInTheDocument();
    expect(screen.getByText("noResults.description {\"search\":\"test\"}"),).toBeInTheDocument();
  });

  it("renders only surveys matching title or description, case-insensitively", () => {
    const surveys: SurveyDto[] = [
      { id: "1", title: "Customer Satisfaction", description: "NPS Q1" },
      { id: "2", title: "Employee Feedback", description: "onboarding pulse" },
      { id: "3", title: "Marketing", description: "Quarterly planning" },
    ];

    mockedUseSurveys.mockReturnValue({
      data: surveys,
      isLoading: false,
      isError: false,
    } as unknown as UseSurveysResult);

    render(<SurveysList search="ONBOARDING" view="list" />);

    const cards = screen.getAllByTestId("survey-card");
    expect(cards).toHaveLength(1);
    expect(cards[0]).toHaveTextContent("Employee Feedback");
    expect(cards[0]).toHaveAttribute("data-view", "list");
  });

  it("handles surveys without description during filtering", () => {
    const surveys: SurveyDto[] = [
      { id: "1", title: "Roadmap", description: null },
      { id: "2", title: "Planning", description: "Internal" },
    ];

    mockedUseSurveys.mockReturnValue({
      data: surveys,
      isLoading: false,
      isError: false,
    } as unknown as UseSurveysResult);

    render(<SurveysList search="road" view="grid" />);

    expect(screen.getAllByTestId("survey-card")).toHaveLength(1);
    expect(screen.getByText("Roadmap")).toBeInTheDocument();
  });
});

describe("ListWrapper", () => {
  it("uses base layout classes for list view", () => {
    const { container } = render(
      <ListWrapper view="list">
        <div>item</div>
      </ListWrapper>,
    );

    expect(container.firstChild).toHaveClass("grid-cols-1");
    expect(container.firstChild).not.toHaveClass("md:grid-cols-2");
  });

  it("adds responsive grid classes for grid view", () => {
    const { container } = render(
      <ListWrapper view="grid">
        <div>item</div>
      </ListWrapper>,
    );

    expect(container.firstChild).toHaveClass("md:grid-cols-2");
    expect(container.firstChild).toHaveClass("xl:grid-cols-3");
  });
});
