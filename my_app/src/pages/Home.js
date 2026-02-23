import Moviecard from "../components/Moviecard";
// import ramayana from "../assets/ramayana.jpg"
import { addition, multiplication } from "../utilities/CommonFunction";

function Home() {

    const movies = [
        { id: 1, src: "ramayana", title: "Dharma", info: "Sathyayuga" },
        { id: 2, src: "ramayana", title: "Ramayana", info: "Threthayuga" },
        { id: 3, src: "ramayana", title: "Mahabharatha", info: "Dwaparayuga" },
        { id: 4, src: "ramayana", title: "Kalki", info: "Kaliyuga" },
    ];
    return <>
        <div className="home">
            <div className="movie-grid">
                {movies.map((movie) => (
                    <Moviecard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    </>

}


export default Home;