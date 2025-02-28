import Hero from "@/components/Hero";

// Home function
export default function Home() {
  return (
    // Main section
      <main className="
        relative 
        bg-black-100 
        flex justify-center items-center 
        flex-col 
        overflow-hidden mx-auto
        sm:px-10 px-5
      ">
       <div className="max-w-7xl w-full">
          {/* Hero Component */}
          <Hero />
       </div>
     </main>
  );
}
