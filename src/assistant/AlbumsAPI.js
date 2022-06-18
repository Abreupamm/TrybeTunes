const AlbumsAPI = async (artist) => {
    const artistURL = encodeURI(artist).replaceAll('%20', '+');
  
    const getAPI = `https://itunes.apple.com/search?entity=album&term=${artistURL}&attribute=allArtistTerm`;
  
    const APIResponse = await fetch(getAPI);
  
    const { results } = await APIResponse.json();
  
    const response = results.map(
      ({
        artistId,
        artistName,
        collectionId,
        collectionName,
        collectionPrice,
        artworkUrl100,
        releaseDate,
        trackCount,
      }) => ({
        artistId,
        artistName,
        collectionId,
        collectionName,
        collectionPrice,
        artworkUrl100,
        releaseDate,
        trackCount,
      }),
    );
    return response;
  };
  
  export default AlbumsAPI;
  