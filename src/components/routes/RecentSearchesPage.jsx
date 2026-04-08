import Header from "../Header";
import Footer from "../Footer";
import RecentSearches from "../RecentSearches";

export default function RecentSearchesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex grow flex-col items-center py-20">
        <RecentSearches />
      </main>
      <Footer />
    </div>
  );
}
