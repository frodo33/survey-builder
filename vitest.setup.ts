import "@testing-library/jest-dom/vitest"

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key
}))