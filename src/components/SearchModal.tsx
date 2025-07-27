import { useState } from "react";
import { Search, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MovieCard from "./MovieCard";

// Import movie images
import movie1 from "@/assets/movie1.jpg";
import movie2 from "@/assets/movie2.jpg";
import movie3 from "@/assets/movie3.jpg";
import movie4 from "@/assets/movie4.jpg";
import movie5 from "@/assets/movie5.jpg";
import movie6 from "@/assets/movie6.jpg";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock search data
  const allMovies = [
    { id: 1, title: "Summer Love", image: movie1, genre: "Romance, Comedy", rating: "94", year: "2024" },
    { id: 2, title: "Midnight Terror", image: movie2, genre: "Horror, Thriller", rating: "87", year: "2024" },
    { id: 3, title: "Galaxy Quest", image: movie3, genre: "Sci-Fi, Adventure", rating: "91", year: "2024" },
    { id: 4, title: "Lost Dreams", image: movie4, genre: "Drama", rating: "96", year: "2024" },
    { id: 5, title: "Speed Force", image: movie5, genre: "Action, Racing", rating: "89", year: "2024" },
    { id: 6, title: "Dragon's Realm", image: movie6, genre: "Fantasy, Adventure", rating: "93", year: "2024" },
  ];

  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search Movies & TV Shows</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for movies, TV shows, genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted border-border"
              autoFocus
            />
          </div>
          
          {searchQuery && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Search Results ({filteredMovies.length})
              </h3>
              
              {filteredMovies.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredMovies.map((movie) => (
                    <div key={movie.id} className="transform scale-75 origin-top-left">
                      <MovieCard
                        title={movie.title}
                        image={movie.image}
                        genre={movie.genre}
                        rating={movie.rating}
                        year={movie.year}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Try searching for different keywords or browse our categories
                  </p>
                </div>
              )}
            </div>
          )}
          
          {!searchQuery && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {["Action", "Comedy", "Horror", "Sci-Fi", "Romance", "Drama"].map((genre) => (
                    <Button
                      key={genre}
                      variant="secondary"
                      size="sm"
                      onClick={() => setSearchQuery(genre)}
                    >
                      {genre}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Searches</h3>
                <div className="space-y-2">
                  {["Galaxy Quest", "Summer Love", "Action Movies"].map((search) => (
                    <div
                      key={search}
                      className="flex items-center space-x-2 text-muted-foreground cursor-pointer hover:text-foreground"
                      onClick={() => setSearchQuery(search)}
                    >
                      <Search className="h-4 w-4" />
                      <span>{search}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;