import { IApiResponse, IMoviePosterSize } from "./types";

const calculateRem = (size: number): string => `${(size / 16) * 1}rem`;

const getMoviePosterPath = (posterPath: string, size: IMoviePosterSize) =>
  `https://image.tmdb.org/t/p/${size}${posterPath}`;

const handleApiSuccess = (data: unknown): IApiResponse => ({
  ok: true,
  result: data,
  error: null,
});

const handleApiError = (error: unknown): IApiResponse => ({
  ok: false,
  result: null,
  error: new Error(error as string),
});

const makeApiRequest = async (
  url: string,
  options?: RequestInit
): Promise<IApiResponse> => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      accept: "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    return handleApiError(response.statusText);
  }
  const data = await response.json();
  return handleApiSuccess(data);
};

export { calculateRem, getMoviePosterPath, makeApiRequest };
