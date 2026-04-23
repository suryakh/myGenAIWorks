import MainContent from "@/components/MainContent";
import CursorEffect from "@/components/CursorEffect";

export default function Home() {
  return (
    <>
      {/* Cyber grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(0,245,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.022) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient corner glows */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background:
            "radial-gradient(ellipse 80% 50% at 20% -10%, rgba(0,245,255,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 90% 90%, rgba(189,0,255,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Custom cursor + spotlight */}
      <CursorEffect />

      {/* Page content — sits above background layers */}
      <div className="relative min-h-screen" style={{ zIndex: 1 }}>
        <MainContent />
      </div>
    </>
  );
}
