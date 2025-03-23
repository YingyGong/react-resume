import React from 'react';

// import backgroundImg from '../images/nj/nanjing-background.jpeg';
import {njOpenwords} from '../data/hometownData';

const HometownPage = React.memo(() => {
  return (
    // <div className="scroll-smooth bg-white text-black">
    //   {/* Hero Section with Background Image */}
    //   <header
    //     className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
    //     style={{
    //       backgroundImage: `url(${backgroundImg})`,
    //     }}
    //   >
    //     <div className="bg-black bg-opacity-10 w-full h-full absolute top-0 left-0" />
    //     <div className="relative z-10 px-4">
    //       <h1 className="text-4xl font-bold mb-4">Discover Nanjing</h1>
    //       <blockquote className="text-lg italic max-w-2xl mx-auto">
    //         {njOpenwords}
    //       </blockquote>
    //     </div>
    //   </header>
    <div className="scroll-smooth bg-white text-black">
      {/* Hero Section with Background Image */}
      <header
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: 'url("/images/nanjing-background.jpeg")',
          backgroundColor: '#ccc', // fallback background color
        }}>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">Discover Nanjing (南京)</h1>
          <blockquote className="text-lg italic max-w-2xl mx-auto text-white drop-shadow">{njOpenwords}</blockquote>
        </div>
      </header>

      {/* Navigation Buttons */}
      <nav className="flex justify-center gap-6 bg-green-200 py-4 sticky top-0 shadow z-20">
        <a className="text-green-900 font-semibold hover:underline" href="#where">
          Where?
        </a>
        <a className="text-green-900 font-semibold hover:underline" href="#history">
          History
        </a>
        <a className="text-green-900 font-semibold hover:underline" href="#explore">
          Explore the City
        </a>
      </nav>

      {/* Sections */}
      <main className="px-6 md:px-16 py-10 space-y-16 max-w-4xl mx-auto">
        <section id="where">
          <h2 className="text-3xl font-bold mb-4">Where?</h2>
          <p className="mb-6">
            Nanjing (南京) is located in eastern China, the capital city of Jiangsu (江苏) province. It sits on the
            Yangtze River and is a key city in the Yangtze River Delta region (长江三角洲). As the first city you reach
            after crossing the Yangtze River in East China, Nanjing is a vital transportation hub: Nanjing South Railway
            Station (南京南站) is one of the largest in Asia, linking the city to Beijing, Shanghai, and beyond.
          </p>
          <p className="mb-6">
            It is not just "somewhere near Shanghai (上海)"
            <del> as all people in East China introduce their hometown to foreigners </del>. However, it is very close,
            just a one-hour high-speed train ride away, so remember to visit Nanjing (and other cities in Jiangsu) when
            you are in Shanghai!
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Location on Map</h3>
            <div className="relative" style={{paddingBottom: '56.25%'}}>
              <iframe
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1613256.246039046!2d119.2443396816655!3d31.921885503647825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1742736078393!5m2!1sen!2sus"
              />
            </div>
          </div>
        </section>

        <section id="history">
          <h2 className="text-3xl font-bold mb-4">History</h2>
          <p className="mb-6">
            With over 2,500 years of history, Nanjing is one of China's Four Great Ancient Capitals. It has served as
            the capital for many dynasties, earning the titles of "Ancient Capital of the Six Dynasties" (六朝古都) and
            "Capital of Ten Dynasties" (十朝都会). The Six Dynasties include Eastern Wu (东吴), Eastern Jin (东晋), Liu
            Song (刘宋), Southern Qi (南齐), Liang (梁), and Chen (陈).
          </p>

          <p className="mb-6">
            Nanjing (南京) got its name from the combination of "Nan" (南), meaning south, and "Jing" (京), meaning
            capital. It was also the capital of the Republic of China (中华民国), the most recent capital before Beijing
            (北京).
          </p>

          <p>
            Fun fact: Nanjing's history as China's capital is longer than the history of the United States as a nation.
          </p>
        </section>

        <section id="explore">
          <h2 className="text-3xl font-bold mb-4">Explore the City</h2>
          <p>
            Discover scenic spots like the Sun Yat-sen Mausoleum, Purple Mountain, Confucius Temple, and the ancient
            city wall. Don't forget to enjoy the famous salted duck! (To be continued...)
          </p>
        </section>
      </main>
    </div>
  );
});

export default HometownPage;
