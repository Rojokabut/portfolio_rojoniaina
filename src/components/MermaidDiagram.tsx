import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({ startOnLoad: true, theme: "default" });
      mermaid.render("mermaid-diagram", chart, (svgCode) => {
        if (ref.current) ref.current.innerHTML = svgCode;
      });
    }
  }, [chart]);

  return <div ref={ref} />;
} 