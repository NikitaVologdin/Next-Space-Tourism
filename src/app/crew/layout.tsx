import BackgroundImage from "@/ui/BackgroundImage";

type props = {
  children: React.ReactNode;
};

export default async function layout({ children }: props) {
  return (
    <>
      <BackgroundImage
        desktopBackground={{
          src: "/crew/background-crew-desktop.jpg",
          width: 1440,
          height: 900,
          quality: 100,
        }}
        tabletBackground={{
          src: "/crew/background-crew-tablet.jpg",
          width: 768,
          height: 1024,
          quality: 100,
        }}
        mobileBackground={{
          src: "/crew/background-crew-mobile.jpg",
          width: 375,
          height: 850,
          quality: 100,
        }}
      />
      <div className="container">
        <main className="page">
          <header className="page__header">
            <h1 className="page__heading">
              <span className="page__heading_decorator">02</span>meet your crew
            </h1>
          </header>
          <section>{children}</section>
        </main>
      </div>
    </>
  );
}
