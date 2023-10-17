import axios, { AxiosResponse } from "axios";
import { Result, MItunesData } from "../../models/itunes-data.model";

export const getPodcast = async (filter: string) => {
  const searchTerm = encodeURIComponent(filter);
  const url = `https://itunes.apple.com/search?term=${searchTerm}&country=ES&media=podcast&limit=25`;

  try {
    const response: AxiosResponse = await axios.get(
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
    );

    const responseData = JSON.parse(response.data.contents);

    if (responseData && responseData.results) {
      // Mapea los resultados a la estructura de las interfaces Root y Result
      const mappedData: MItunesData = {
        resultCount: responseData.resultCount,
        results: responseData.results.map((result: Result) => {
          return {
            wrapperType: result.wrapperType,
            kind: result.kind,
            collectionId: result.collectionId,
            trackId: result.trackId,
            artistName: result.artistName,
            collectionName: result.collectionName,
            trackName: result.trackName,
            collectionCensoredName: result.collectionCensoredName,
            trackCensoredName: result.trackCensoredName,
            collectionViewUrl: result.collectionViewUrl,
            feedUrl: result.feedUrl,
            trackViewUrl: result.trackViewUrl,
            artworkUrl30: result.artworkUrl30,
            artworkUrl60: result.artworkUrl60,
            artworkUrl100: result.artworkUrl100,
            collectionPrice: result.collectionPrice,
            trackPrice: result.trackPrice,
            collectionHdPrice: result.collectionHdPrice,
            releaseDate: result.releaseDate,
            collectionExplicitnes: result.collectionExplicitness,
            trackExplicitness: result.trackExplicitness,
            trackCount: result.trackCount,
            trackTimeMillis: result.trackTimeMillis,
            country: result.country,
            currency: result.currency,
            primaryGenreName: result.primaryGenreName,
            contentAdvisoryRating: result.contentAdvisoryRating,
            artworkUrl600: result.artworkUrl600,
            genreIds: result.genreIds,
            genres: result.genres,
          };
        }),
      };

      return mappedData;
    }
  } catch (error) {
    console.error("Error al buscar podcasts:", error);
  }
};
