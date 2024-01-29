const searchInput = document.getElementById("search-input");
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestAPI(searchTerm) {
    const url = "";
    fetch()
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtists.classList.remove('hidden');
        return;
    }
})