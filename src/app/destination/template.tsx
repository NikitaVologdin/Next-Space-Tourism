import TemplateWrapper from "@/components/TemplateWrapper";

type props = {
  children: React.ReactNode;
};

export default function rootTemplate({ children }: props) {
  return <TemplateWrapper className="destination">{children}</TemplateWrapper>;
}
