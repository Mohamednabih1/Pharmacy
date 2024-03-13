export default function SnapSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="screenHeight snap-center">{children}</section>;
}
