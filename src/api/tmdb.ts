import configuration from "../configuration";

async function get<TBody>(relativeURL: string): Promise<TBody> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${configuration.apiToken}`,
    },
  };
  const response = await fetch(
    // `${configuration.apiUrl}/3${relativeURL}`,
    `${configuration.apiUrl}/3/movie/now_playing?page=1`,
    options
  );
  console.log("response", response);
  const json: TBody = await response.json();
  return json;
}

interface PageResponse<TResult> {
  page: number;
  results: TResult[];
}

export interface MovieDetails {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  backdrop_path?: string;
}

interface Configuration {
  images: {
    base_url: string;
  };
}

interface ITmbdClient {
  getConfiguration: () => Promise<Configuration>;
  getNowPlaying: () => Promise<MovieDetails[]>;
}

export const client = {
  async getConfiguration() {
    return get<Configuration>("/configuration");
  },

  async getNowPlaying(): Promise<MovieDetails[]> {
    const response = await get<PageResponse<MovieDetails>>(
      "movie/now_playing?page=1"
    );
    console.log("response.results", response.results);

    return response.results;
  },
};
