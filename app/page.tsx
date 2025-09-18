import Sidebar from "@/components/sidebar";
import FeaturedPost from "@/components/featuredpost";
import EmblaCarousel from "@/components/banner";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-white">
   
      <div className="w-full">
        <EmblaCarousel />
      </div>

      
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <FeaturedPost />
        </div>
      </div>
    </main>
  );
}
