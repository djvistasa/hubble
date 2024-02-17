type IMoviePosterSize = "w500" | "original";

type IApiResponse = {
  ok: boolean;
  result: unknown;
  error: unknown;
};

export type { IApiResponse, IMoviePosterSize };
