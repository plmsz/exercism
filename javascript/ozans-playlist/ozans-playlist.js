export function removeDuplicates(playlist) {
  return ([...new Set(playlist)])
}

export function hasTrack(playlist, track) {
  const uniqueSongs = new Set(playlist);
  return uniqueSongs.has(track)
}


export function addTrack(playlist, track) {
  const uniqueSongs = new Set(playlist).add(track);
  return [...uniqueSongs]
}

export function deleteTrack(playlist, track) {
  const uniqueSongs = new Set(playlist)
  uniqueSongs.delete(track);
  return [...uniqueSongs];
}

export function listArtists(playlist) {
  const splited = playlist.map(x => x.split(" - ")[1])
  return [...new Set(splited)]
}

/* export function listArtists(playlist) {
const artists = []
playlist.forEach(song=> {
  const [, author] = song.split(' - ')
  artists.push(author)
})
return [...new Set(artists)]
} */