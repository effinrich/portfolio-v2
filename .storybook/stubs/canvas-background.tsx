import { cn } from "#/lib/cn"

type CanvasBackgroundProps = {
  className?: string
}

// Deterministic stand-in for the real CanvasBackground, which loads Three.js
// from a CDN at runtime. Used via viteFinal alias in Storybook/Chromatic so
// page snapshots are stable; the animated tubes scene is covered separately in
// its own story (which imports the real component via a relative path).
export function CanvasBackground({ className }: CanvasBackgroundProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-0 flex min-h-screen w-full cursor-crosshair flex-col overflow-hidden bg-black",
        className,
      )}
      role="presentation"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-black/20 via-black/40 to-black" />
    </div>
  )
}
