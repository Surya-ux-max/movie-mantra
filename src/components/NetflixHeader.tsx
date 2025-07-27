import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const NetflixHeader = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-background/90 to-transparent px-4 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <h1 className="text-netflix-red text-2xl font-bold">NETFLIX</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">Home</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">TV Shows</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Movies</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">New & Popular</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">My List</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-muted-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-muted-foreground">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-muted-foreground">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NetflixHeader;