import { useState } from "react";
import { User, Settings, Edit3, Heart, Clock, LogOut, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import MovieCard from "./MovieCard";

// Import movie images
import movie1 from "@/assets/movie1.jpg";
import movie2 from "@/assets/movie2.jpg";
import movie3 from "@/assets/movie3.jpg";

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfileModal = ({ isOpen, onClose }: UserProfileModalProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "",
    preferences: ["Action", "Sci-Fi", "Drama"],
    memberSince: "January 2024"
  });

  const watchHistory = [
    { id: 1, title: "Summer Love", image: movie1, genre: "Romance, Comedy", rating: "94", year: "2024", watchedAt: "2 days ago" },
    { id: 2, title: "Midnight Terror", image: movie2, genre: "Horror, Thriller", rating: "87", year: "2024", watchedAt: "1 week ago" },
    { id: 3, title: "Galaxy Quest", image: movie3, genre: "Sci-Fi, Adventure", rating: "91", year: "2024", watchedAt: "2 weeks ago" },
  ];

  const favoriteMovies = [
    { id: 1, title: "Summer Love", image: movie1, genre: "Romance, Comedy", rating: "94", year: "2024" },
    { id: 2, title: "Galaxy Quest", image: movie3, genre: "Sci-Fi, Adventure", rating: "91", year: "2024" },
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to backend/Supabase
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>User Profile</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-6 p-6 bg-muted rounded-lg">
            <Avatar className="h-20 w-20">
              <AvatarImage src={userProfile.avatar} />
              <AvatarFallback className="text-2xl">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={userProfile.name}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userProfile.email}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button onClick={handleSaveProfile}>Save Changes</Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{userProfile.name}</h2>
                  <p className="text-muted-foreground">{userProfile.email}</p>
                  <p className="text-sm text-muted-foreground mt-2">Member since {userProfile.memberSince}</p>
                  
                  <div className="flex items-center space-x-2 mt-4">
                    <Button onClick={() => setIsEditing(true)} size="sm">
                      <Edit3 className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                    <Button variant="destructive" size="sm">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Profile Content Tabs */}
          <Tabs defaultValue="watchlist" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="watchlist">My List</TabsTrigger>
              <TabsTrigger value="history">Watch History</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            
            <TabsContent value="watchlist" className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <h3 className="text-lg font-semibold">My Watchlist</h3>
              </div>
              
              {favoriteMovies.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {favoriteMovies.map((movie) => (
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
                  <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Your watchlist is empty</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Add movies and shows you want to watch later
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="history" className="space-y-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <h3 className="text-lg font-semibold">Recently Watched</h3>
              </div>
              
              <div className="space-y-4">
                {watchHistory.map((movie) => (
                  <div key={movie.id} className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                    <img src={movie.image} alt={movie.title} className="w-16 h-24 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{movie.title}</h4>
                      <p className="text-sm text-muted-foreground">{movie.genre}</p>
                      <p className="text-xs text-muted-foreground mt-1">Watched {movie.watchedAt}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{movie.rating}% Match</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="preferences" className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">Genre Preferences</h3>
                <div className="flex flex-wrap gap-2">
                  {["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance", "Thriller", "Fantasy"].map((genre) => (
                    <Badge
                      key={genre}
                      variant={userProfile.preferences.includes(genre) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => {
                        setUserProfile(prev => ({
                          ...prev,
                          preferences: prev.preferences.includes(genre)
                            ? prev.preferences.filter(p => p !== genre)
                            : [...prev.preferences, genre]
                        }));
                      }}
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Account Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">47</div>
                    <div className="text-sm text-muted-foreground">Movies Watched</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">TV Shows</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">156h</div>
                    <div className="text-sm text-muted-foreground">Watch Time</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">8</div>
                    <div className="text-sm text-muted-foreground">Favorites</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfileModal;