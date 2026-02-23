

function Moviecard({ movie }) {
    function onLike() {
        console.log("Liked it ...!")
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {/* <img src={movie.url} alt={movie.title} /> */}
                <div className="movie-overlay">
                    <button className="like-btn" onClick={onLike}>
                        ❤️
                    </button>
                </div>
            </div>
            <div className="movie-title">
                <h3>{movie.title}</h3>
                <p>{movie.info}</p>
            </div>
        </div>
    )
}

export default Moviecard