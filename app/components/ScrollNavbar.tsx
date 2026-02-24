"use client";

import { useEffect, useState, ReactElement } from "react";

export default function ScrollNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10"
      style={{
        backgroundColor: scrolled
          ? "rgba(245, 245, 245, 0.98)"
          : "rgba(16, 19, 77, 0.0)",
        transition: "background-color 0.6s ease",
      }}
    >
      {/* BLUR KATMANI */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      />

      {/* GERÇEK İÇERİK */}
      <div className="relative z-10">
        {typeof children === "object"
          ? (children as ReactElement<any>) &&
            (() => {
              const child = children as ReactElement<any>;
              return {
                ...child,
                props: {
                  ...child.props,
                  shrink: scrolled,
                },
              };
            })()
          : children}
      </div>
    </header>
  );
}