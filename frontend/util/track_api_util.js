export const uploadTrack = (track) => {
  return $.ajax({
    type: 'POST',
    url: 'api/tracks',
    contentType: false,
    processData: false,
    data: track
  });
};

export const fetchTracks = () => {
  return $.ajax({
    url: 'api/tracks',
  });
};

export const fetchTrack = (id) => {
  return $.ajax({
    url: `api/tracks/${id}`,
  });
};

export const deleteTrack = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `api/tracks/${id}`
  });
};

export const fetchPlaylistTracks = (playlistId) => {
  return $.ajax({
    url: 'api/tracks',
    data: {
      playlistId
    }
  });
};

export const fetchUserTracks = (userId) => {
  return $.ajax({
    url: 'api/tracks',
    data: {
      userId
    }
  });
};
