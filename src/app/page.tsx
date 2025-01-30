import BackgroundImage from "@/ui/BackgroundImage";
import Explore from "@/ui/Explore";

export default function Home() {
  return (
    <>
      <BackgroundImage
        desktopBackground={{
          src: "/home/background-home-desktop.jpg",
          width: 1440,
          height: 900,
          quality: 100,
        }}
        tabletBackground={{
          src: "/home/background-home-tablet.jpg",
          width: 768,
          height: 1024,
          quality: 100,
        }}
        mobileBackground={{
          src: "/home/background-home-mobile.jpg",
          width: 375,
          height: 667,
          quality: 100,
        }}
      />
      <div className="container">
        <main className="home">
          <section className="home__content">
            <article className="home__article">
              <h1 className="home__heading">
                So, you want to travel to
                <span className="home__heading_highlight">space</span>
              </h1>
              <p className="home__paragraph">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </article>
            <Explore />
          </section>
        </main>
      </div>
    </>
  );
}
