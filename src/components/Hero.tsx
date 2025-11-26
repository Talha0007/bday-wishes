export function Hero() {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 text-center z-10">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-dancing font-bold gradient-text mb-8">
            Happy Birthday
          </h1>
          <h2 className="text-4xl md:text-6xl font-dancing text-primary mb-12">
            Amna 🎉
          </h2>
        </div>

        <div className="flex justify-center mb-12 scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="polaroid">
            <img 
              src="/images/amna.jpeg" 
              alt="Birthday person" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg"
            />
            <div className="text-center mt-2 font-dancing text-xl text-gray-700">
              Another year of awesome! ✨
            </div>
            <div className="text-center mt-2 font-dancing text-xl text-gray-700">
              27 November 2025 🎈🎇
            </div>
          </div>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Happy birthday to you Amna ❤️🥮🎂🪷May Allah give you many blessings in your life always no doubt you are a wonderful person and no one can compete you no one can take your place no one can become what you are plz reduce your anger little bit in sha allah you will open your flowers shop one day and buy your dream car may Allah pak grant you long life with health and happiness Also Tbh aj Ai use nai kia🤣🤣bcz today is a very important day so i want to express my words ab khtm ho gai english 😇thats my pure felling about you
          </p>
        </div>
      </div>
    </section>
  )
}
