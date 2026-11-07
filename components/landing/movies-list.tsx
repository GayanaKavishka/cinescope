import { MovieCard } from "./movie-card";
import { MOVIES_DATA } from "@/lib/data";

export function MovieList(){
    return (
        <>
        <div className="text-muted-foreground text-sm">
            Showing 5 of 100 movies.</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {MOVIES_DATA.map((movie) =>(
                <MovieCard key={`movie-${movie._id}`} movie={movie}/>
            ))}
        </div>
    </>
    )
    
}