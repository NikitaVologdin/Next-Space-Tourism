import Layout from "@/components/Layout";

type props = {
  children: React.ReactNode;
};

export default function rootTemplate({ children }: props) {
  return <Layout className="destination">{children}</Layout>;
}
