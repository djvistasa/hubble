import { IApiResponse, IMoviePosterSize } from "./types";

const calculateRem = (size: number): string => `${(size / 16) * 1}rem`;

const getMoviePosterPath = (posterPath: string, size: IMoviePosterSize) => {
  if (!posterPath) {
    return "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";
  }
  return `https://image.tmdb.org/t/p/${size}${posterPath}`;
};

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

const formatCurrency = (amount: number, currency: string): string =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    amount
  );

export { calculateRem, formatCurrency, getMoviePosterPath, makeApiRequest };
