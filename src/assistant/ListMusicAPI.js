const ListMusicAPI = async (id) => {
    const req = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
    const reqJson = await req.json();
    return reqJson.results;
  };
  
  export default ListMusicAPI;
  