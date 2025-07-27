import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-movie.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Featured Movie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Dark Strike
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            When the city's lights go out, one man must navigate through the darkness to save those he loves. 
            An action-packed thriller that will keep you on the edge of your seat.
          </p>
          
          <div className="flex items-center space-x-4">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8">
              <Play className="h-5 w-5 mr-2" />
              Play
            </Button>
            <Button variant="secondary" size="lg" className="px-8">
              <Info className="h-5 w-5 mr-2" />
              More Info
            </Button>
          </div>
          
          <div className="mt-6 flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="bg-muted px-2 py-1 rounded text-foreground">HD</span>
            <span>2024</span>
            <span>2h 15m</span>
            <span>Action, Thriller</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;