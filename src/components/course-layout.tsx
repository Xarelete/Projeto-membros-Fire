// This component is no longer used in the new lesson page layout.
// You can safely delete it if it's not used anywhere else.
export function CourseLayout({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-screen-minus-header">
      {sidebar}
      <main className="flex-1 flex flex-col overflow-hidden">
        {children}
      </main>
      <style jsx>{`
        .h-screen-minus-header {
          height: calc(100vh - 4rem);
        }
      `}</style>
    </div>
  );
}
