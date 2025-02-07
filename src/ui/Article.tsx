type props = {
  children?: React.ReactNode;
  subheading?: string;
  name: string;
  description: string;
  topControls: boolean;
  hr: boolean;
  className?: string;
};

export default function Article({
  children,
  subheading,
  name,
  description,
  topControls,
  hr,
  className,
}: props) {
  return (
    <article className={`article ${className ? className + "__article" : ""}`}>
      {topControls && children}
      <h2 className="article__heading">
        {subheading && (
          <strong className="article__heading_subheading">{subheading}</strong>
        )}
        <span className="article__heading_title">{name}</span>
      </h2>

      <p className="article__paragraph">{description}</p>
      {hr && <div className="article__hr"></div>}
      {!topControls && children}
    </article>
  );
}
