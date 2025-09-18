import Sidebar from "@/components/sidebar";
import FeaturedPost from "@/components/featuredpost";
import EmblaCarousel from "@/components/banner";

export default function Home() {
  return (
    <main className="container mx-auto bg-white">
      {/* ✅ Embla Carousel on top */}
      <div className="w-full">
        <EmblaCarousel />
      </div>

      {/* ✅ Below the carousel: Sidebar + Featured Post */}
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <FeaturedPost />
        </div>
      </div>
    </main>
  );
}
