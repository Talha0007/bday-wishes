import { useEffect, useRef } from "react";
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { BirthdayWish } from '@/components/BirthdayWish'
import { TabsSection } from '@/components/TabsSection'
import { MessagesList } from '@/components/MessagesList'
import { Gallery } from '@/components/Gallery'
import { Footer } from '@/components/Footer'
import { FloatingElements } from '@/components/FloatingElements'
import { SparkleAnimation } from '@/components/SparkleAnimation'
import { ScrollToTop } from '@/components/ScrollToTop'

const Index = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleInteraction = () => {
      audioRef.current.play().catch(() => {});
      window.removeEventListener("click", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);

    return () => window.removeEventListener("click", handleInteraction);
  }, []);
  return (
    <>
     <audio ref={audioRef} preload="auto">
        <source src="/public/audios/bd-music.webm" type="audio/webm" />
        <source src="/public/audios/bd-music.webm" type="audio/mpeg" />
      </audio>
    <div className="min-h-screen bg-background relative">
      <FloatingElements />
      <SparkleAnimation />
      <Header />
      <main>
        <Hero />
        <BirthdayWish />
        <TabsSection />
        {/* <MessagesList /> */}
        <Gallery />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
    </>
  );
};

export default Index;
