import "@testing-library/jest-dom/vitest"

vi.mock("next-intl", () => ({
  useTranslations: () =>
    (key: string, params?: Record<string, unknown>) => {
      if (!params) return key;

      return `${key} ${JSON.stringify(params)}`;
    },
}));