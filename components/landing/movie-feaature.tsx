 import { Button } from "@/components/ui/button";
import { MovieList } from "./movies-list";


 export function MovieFeacture(){
    return(
        <section id="featured-movies" className="container max-w-350 mx-auto px-4 py-12 md:px-6 min-h-screen">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tighter">Featured Movies</h1>
                    <p className="text-muted-foreground">Our selection of must-watch film</p>
                </div>
                <Button variant="outline" className="hover:accent hover:text-accent-foreground h-9 px-4 py-2 rounded-md shadow-2xs cursor-pointer">
                    View All
                </Button>
            </div>
            <div className="space-y-6">
                {/* search filter */}
                <div className="w-full h-30.5 bg-purple-400 rounded-lg"></div>

                {/*Movies list */}
                <MovieList/>
            </div>
        </section>
    );
 }