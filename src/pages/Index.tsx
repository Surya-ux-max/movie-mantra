import NetflixHeader from "@/components/NetflixHeader";
import HeroSection from "@/components/HeroSection";
import MovieRow from "@/components/MovieRow";

// Import movie images
import movie1 from "@/assets/movie1.jpg";
import movie2 from "@/assets/movie2.jpg";
import movie3 from "@/assets/movie3.jpg";
import movie4 from "@/assets/movie4.jpg";
import movie5 from "@/assets/movie5.jpg";
import movie6 from "@/assets/movie6.jpg";

const Index = () => {
  const trendingMovies = [
    { id: 1, title: "Summer Love", image: movie1, genre: "Romance, Comedy", rating: "94", year: "2024" },
    { id: 2, title: "Midnight Terror", image: movie2, genre: "Horror, Thriller", rating: "87", year: "2024" },
    { id: 3, title: "Galaxy Quest", image: movie3, genre: "Sci-Fi, Adventure", rating: "91", year: "2024" },
    { id: 4, title: "Lost Dreams", image: movie4, genre: "Drama", rating: "96", year: "2024" },
    { id: 5, title: "Speed Force", image: movie5, genre: "Action, Racing", rating: "89", year: "2024" },
    { id: 6, title: "Dragon's Realm", image: movie6, genre: "Fantasy, Adventure", rating: "93", year: "2024" },
  ];

  const actionMovies = [
    { id: 7, title: "Speed Force", image: movie5, genre: "Action, Racing", rating: "89", year: "2024" },
    { id: 8, title: "Dragon's Realm", image: movie6, genre: "Fantasy, Adventure", rating: "93", year: "2024" },
    { id: 9, title: "Summer Love", image: movie1, genre: "Romance, Comedy", rating: "94", year: "2024" },
    { id: 10, title: "Midnight Terror", image: movie2, genre: "Horror, Thriller", rating: "87", year: "2024" },
    { id: 11, title: "Galaxy Quest", image: movie3, genre: "Sci-Fi, Adventure", rating: "91", year: "2024" },
    { id: 12, title: "Lost Dreams", image: movie4, genre: "Drama", rating: "96", year: "2024" },
  ];

  const horrorMovies = [
    { id: 13, title: "Midnight Terror", image: movie2, genre: "Horror, Thriller", rating: "87", year: "2024" },
    { id: 14, title: "Lost Dreams", image: movie4, genre: "Drama", rating: "96", year: "2024" },
    { id: 15, title: "Dragon's Realm", image: movie6, genre: "Fantasy, Adventure", rating: "93", year: "2024" },
    { id: 16, title: "Galaxy Quest", image: movie3, genre: "Sci-Fi, Adventure", rating: "91", year: "2024" },
    { id: 17, title: "Speed Force", image: movie5, genre: "Action, Racing", rating: "89", year: "2024" },
    { id: 18, title: "Summer Love", image: movie1, genre: "Romance, Comedy", rating: "94", year: "2024" },
  ];

  const comedyMovies = [
    { id: 19, title: "Summer Love", image: movie1, genre: "Romance, Comedy", rating: "94", year: "2024" },
    { id: 20, title: "Galaxy Quest", image: movie3, genre: "Sci-Fi, Adventure", rating: "91", year: "2024" },
    { id: 21, title: "Dragon's Realm", image: movie6, genre: "Fantasy, Adventure", rating: "93", year: "2024" },
    { id: 22, title: "Lost Dreams", image: movie4, genre: "Drama", rating: "96", year: "2024" },
    { id: 23, title: "Speed Force", image: movie5, genre: "Action, Racing", rating: "89", year: "2024" },
    { id: 24, title: "Midnight Terror", image: movie2, genre: "Horror, Thriller", rating: "87", year: "2024" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NetflixHeader />
      <HeroSection />
      
      <div className="relative z-10 -mt-32 pb-20">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Action & Adventure" movies={actionMovies} />
        <MovieRow title="Horror Movies" movies={horrorMovies} />
        <MovieRow title="Comedy Movies" movies={comedyMovies} />
      </div>
    </div>
  );
};

export default Index;