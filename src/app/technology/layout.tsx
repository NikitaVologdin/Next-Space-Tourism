import BackgroundImage from "@/ui/BackgroundImage";

type props = {
  children: React.ReactNode;
};

export default async function layout({ children }: props) {
  return (
    <>
      <BackgroundImage
        desktopBackground={{
          src: "/technology/background-technology-desktop.jpg",
          width: 1440,
          height: 900,
          quality: 100,
        }}
        tabletBackground={{
          src: "/technology/background-technology-tablet.jpg",
          width: 768,
          height: 1024,
          quality: 100,
        }}
        mobileBackground={{
          src: "/technology/background-technology-mobile.jpg",
          width: 375,
          height: 850,
          quality: 100,
        }}
      />
      <div className="container">
        <main className="page">
          <header className="page__header">
            <h1 className="page__heading">
              <span className="page__heading_decorator">03</span>space launch
              101
            </h1>
          </header>
          <section className="page__content technology">{children}</section>
        </main>
      </div>
    </>
  );
}
