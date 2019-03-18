const ENDPOINT = 'https://cw1puqdqd2.execute-api.us-east-1.amazonaws.com/dev/spotify';

const getPlaylists = () => {

  let playlists = init().then(response => {
    return response;
  });

  function init() {
    return new Promise(resolve => {
      fetch(ENDPOINT).then(response => {
        return response.json();
      }).then(data => {
        resolve(data.data);
      });
    });
  }

  return playlists;
}

export default getPlaylists;