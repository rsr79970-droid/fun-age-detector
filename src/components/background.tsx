export function Background() {
  return (
    <>
      {/* Base */}
      <div className="fixed inset-0 -z-50 bg-[#09090B]" />

      {/* Grid */}
      <div className="fixed inset-0 -z-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Purple Glow */}
      <div className="fixed left-[-250px] top-[-180px] -z-30 h-[700px] w-[700px] rounded-full bg-violet-600/25 blur-[180px]" />

      {/* Cyan Glow */}
      <div className="fixed right-[-250px] top-[80px] -z-30 h-[650px] w-[650px] rounded-full bg-cyan-500/20 blur-[180px]" />

      {/* Pink Glow */}
      <div className="fixed bottom-[-300px] left-1/2 -z-30 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-[220px]" />

      {/* Small Accent */}
      <div className="fixed bottom-20 left-20 -z-30 h-48 w-48 rounded-full bg-indigo-500/10 blur-[120px]" />

      {/* Noise */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.8) 0.6px, transparent 0.6px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Vignette */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

      {/* Bottom Fade */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
    </>
  );
}
