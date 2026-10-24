import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let rafId;
    const moveHandler = (e) => {
      // Use requestAnimationFrame with hardware-accelerated translate3d for 120fps lag-free tracking
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.transform = `translate3d(${e.clientX - 40}px, ${e.clientY - 40}px, 0)`;
        }
      });
    };

    window.addEventListener("mousemove", moveHandler, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block will-change-transform"
      style={{
        transform: "translate3d(-100px, -100px, 0)",
        transition: "transform 0.05s linear",
      }}
    >
      <div
        className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl opacity-80"
      />
    </div>
  );
}
