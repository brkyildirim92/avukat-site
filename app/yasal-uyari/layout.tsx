export default function YasalUyariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#262b3e] text-gray-200 min-h-screen">
      {children}
    </div>
  );
}
