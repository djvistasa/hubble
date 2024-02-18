import { vi } from "vitest";

vi.mock("react-router-dom", () => ({
  Link: () => {},
  useParams: () => ({
    page: "1",
  }),
  useSearchParams: () => [
    {
      get: () => "1",
    },
    vi.fn(),
  ],
  useNavigate: () => vi.fn(),
  useLocation: () => ({
    pathname: "/search",
  }),
}));
