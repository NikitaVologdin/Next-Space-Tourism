import BackgroundImage from "@/ui/BackgroundImage";

type props = {
  children: React.ReactNode;
};

export default async function layout({ children }: props) {
  return (
    <>
      <BackgroundImage
        desktopBackground={{
          src: "/destination/background-destination-desktop.jpg",
          width: 1440,
          height: 900,
          quality: 100,
        }}
        tabletBackground={{
          src: "/destination/background-destination-tablet.jpg",
          width: 768,
          height: 1024,
          quality: 100,
        }}
        mobileBackground={{
          src: "/destination/background-destination-mobile.jpg",
          width: 375,
          height: 850,
          quality: 100,
        }}
      />
      <div className="container">
        <main className="page">
          <header className="page__header">
            <h1 className="page__heading">
              <span className="page__heading_decorator">01</span>pick your
              destination
            </h1>
          </header>
          <section>{children}</section>
        </main>
      </div>
    </>
  );
}
