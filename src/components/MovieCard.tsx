import { useState } from "react";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MovieCardProps {
  title: string;
  image: string;
  genre: string;
  rating: string;
  year: string;
}

const MovieCard = ({ title, image, genre, rating, year }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group flex-shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-48 h-72 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>
      
      {isHovered && (
        <div className="absolute inset-0 bg-card rounded-lg shadow-lg border border-border p-4 z-10 transform translate-y-2">
          <img 
            src={image} 
            alt={title}
            className="w-full h-32 object-cover rounded mb-3"
          />
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                <Play className="h-4 w-4 mr-1" />
                Play
              </Button>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground mb-1">
                <span className="text-green-500 font-medium">{rating}% Match</span>
                <span>{year}</span>
              </div>
              <p className="text-foreground font-medium mb-1">{title}</p>
              <p className="text-muted-foreground text-xs">{genre}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;