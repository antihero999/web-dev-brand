import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const NODE_DATA = [
  { label: "Web Development",    desc: "Custom websites built from scratch",         color: "#e85d26" },
  { label: "Web Applications",   desc: "Full-stack apps that solve real problems",    color: "#9b5de5" },
  { label: "UI/UX Design",       desc: "Interfaces that are beautiful and intuitive", color: "#2d6a4f" },
  { label: "React & JavaScript", desc: "Modern frontend development",                 color: "#e85d26" },
  { label: "Python & Node.js",   desc: "Powerful backend systems",                    color: "#9b5de5" },
  { label: "REST APIs",          desc: "Connecting systems and data sources",          color: "#2d6a4f" },
  { label: "SEO Optimization",   desc: "Rank higher and get found on Google",         color: "#1a1a2e" },
  { label: "Training & Courses", desc: "Practical web dev training in Anambra",       color: "#e85d26" },
  { label: "Mobile Responsive",  desc: "Perfect on every screen and device",          color: "#2d6a4f" },
  { label: "Git & GitHub",       desc: "Clean version-controlled codebases",          color: "#9b5de5" },
];

export default function HeroConstellation() {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const hintRef = useRef(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    const ctx = canvas.getContext("2d");

    // ---- DPR-AWARE RESIZE ----
    let cw = 0; // logical width (CSS px)
    let ch = 0; // logical height (CSS px)

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cw = wrapper.clientWidth;
      ch = wrapper.clientHeight;
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      canvas.style.width = cw + "px";
      canvas.style.height = ch + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset before scaling
      ctx.scale(dpr, dpr);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrapper);

    // Show drag hint on mobile (one-time)
    if (window.innerWidth < 768) {
      setShowHint(true);
    }

    // ---- 3D NODE POSITIONS ----
    const nodes = NODE_DATA.map((data, i) => {
      const golden = Math.PI * (3 - Math.sqrt(5));
      const y = 1 - (i / (NODE_DATA.length - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      return {
        ...data,
        x: Math.cos(theta) * r,
        y: y,
        z: Math.sin(theta) * r,
        scale: 0,
        pulse: Math.random() * Math.PI * 2,
      };
    });

    // ---- CONNECTIONS ----
    const connections = [];
    nodes.forEach((a, i) => {
      const distances = nodes
        .map((b, j) => ({ j, d: Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z) }))
        .filter((x) => x.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      distances.forEach(({ j }) => {
        const key = [i, j].sort().join("-");
        if (!connections.find((c) => c.key === key)) {
          connections.push({ key, a: i, b: j });
        }
      });
    });

    // ---- ROTATION STATE ----
    let rotX = -0.2;
    let rotY = 0;
    let isDragging = false;
    let lastMouse = { x: 0, y: 0 };
    let velX = 0;
    let velY = 0;
    let hoveredNode = null;
    let tooltipX = 0;
    let tooltipY = 0;

    // ---- ENTRANCE ANIMATION ----
    nodes.forEach((node, i) => {
      gsap.to(node, {
        scale: 1,
        duration: 0.6,
        delay: 0.2 + i * 0.08,
        ease: "back.out(1.7)",
      });
    });

    // ---- MOUSE EVENTS ----
    function onMouseDown(e) {
      isDragging = true;
      lastMouse = { x: e.clientX, y: e.clientY };
      velX = 0;
      velY = 0;
    }
    function onMouseMove(e) {
      if (isDragging) {
        const dx = e.clientX - lastMouse.x;
        const dy = e.clientY - lastMouse.y;
        rotY += dx * 0.005;
        rotX -= dy * 0.005;
        velX = -dy * 0.005;
        velY = dx * 0.005;
        lastMouse = { x: e.clientX, y: e.clientY };
        hoveredNode = null;
      } else {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        hoveredNode = null;
        projectedPositions.forEach((p, i) => {
          const dx = mx - p.sx;
          const dy = my - p.sy;
          if (Math.hypot(dx, dy) < 20) {
            hoveredNode = i;
            tooltipX = mx;
            tooltipY = my;
          }
        });
        canvas.style.cursor = hoveredNode !== null ? "pointer" : "grab";
      }
    }
    function onMouseUp() {
      isDragging = false;
      canvas.style.cursor = "grab";
    }

    // ---- TOUCH EVENTS (with full velocity support) ----
    function onTouchStart(e) {
      e.preventDefault();
      isDragging = true;
      lastMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      velX = 0;
      velY = 0;
    }
    function onTouchMove(e) {
      e.preventDefault();
      if (!isDragging) return;
      const dx = e.touches[0].clientX - lastMouse.x;
      const dy = e.touches[0].clientY - lastMouse.y;
      rotY += dx * 0.005;
      rotX -= dy * 0.005;
      velX = -dy * 0.005;
      velY = dx * 0.005;
      lastMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    function onTouchEnd() {
      isDragging = false;
    }

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd, { passive: false });

    // ---- 3D PROJECTION ----
    const projectedPositions = nodes.map(() => ({ sx: 0, sy: 0, sz: 0, scale: 1 }));

    function project(x, y, z, w, h) {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      let rx = x * cosY + z * sinY;
      let rz = -x * sinY + z * cosY;
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      let ry = y * cosX - rz * sinX;
      rz = y * sinX + rz * cosX;

      const fov = 3.5;
      const scale = fov / (fov + rz);
      const cx = w / 2;
      const cy = h / 2;

      // Mobile uses tighter radius so nodes stay within canvas bounds
      const isMobile = w < 768;
      const radius = Math.min(w, h) * (isMobile ? 0.38 : 0.42);

      return {
        sx: cx + rx * radius * scale,
        sy: cy + ry * radius * scale,
        sz: rz,
        scale,
      };
    }

    // ---- ANIMATION LOOP ----
    let rafId;
    let lastTime = 0;

    function draw(time) {
      rafId = requestAnimationFrame(draw);
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      // Use logical (CSS) dimensions for all drawing math
      const w = cw;
      const h = ch;

      if (!isDragging) {
        rotY += 0.004;
        rotX += velX * 0.95;
        rotY += velY * 0.95;
        velX *= 0.92;
        velY *= 0.92;
      }

      ctx.clearRect(0, 0, w, h);

      // Project all nodes
      nodes.forEach((node, i) => {
        const p = project(node.x, node.y, node.z, w, h);
        projectedPositions[i].sx = p.sx;
        projectedPositions[i].sy = p.sy;
        projectedPositions[i].sz = p.sz;
        projectedPositions[i].scale = p.scale;
      });

      // Sort by depth
      const drawOrder = nodes
        .map((_, i) => i)
        .sort((a, b) => projectedPositions[a].sz - projectedPositions[b].sz);

      // Draw connections
      connections.forEach(({ a, b }) => {
        const pa = projectedPositions[a];
        const pb = projectedPositions[b];
        ctx.beginPath();
        ctx.moveTo(pa.sx, pa.sy);
        ctx.lineTo(pb.sx, pb.sy);
        ctx.strokeStyle = "rgba(26, 26, 46, 0.13)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      const isMobile = w < 768;

      // Draw nodes and labels
      drawOrder.forEach((i) => {
        const node = nodes[i];
        const p = projectedPositions[i];
        const t = time / 1000;

        const pulse = 1 + Math.sin(t * 1.8 + node.pulse) * 0.12;
        // Smaller base radius on mobile
        const baseRadius = Math.max(6, (isMobile ? 11 : 14) * p.scale);
        const r = baseRadius * pulse * node.scale;

        if (r < 0.5) return;

        // Glow
        const grd = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 3);
        grd.addColorStop(0, node.color + "55");
        grd.addColorStop(1, node.color + "00");
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Sphere
        const sphereGrd = ctx.createRadialGradient(
          p.sx - r * 0.3, p.sy - r * 0.3, r * 0.1,
          p.sx, p.sy, r
        );
        sphereGrd.addColorStop(0, node.color + "ff");
        sphereGrd.addColorStop(1, node.color + "99");
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = sphereGrd;
        ctx.fill();

        // Glint
        ctx.beginPath();
        ctx.arc(p.sx - r * 0.28, p.sy - r * 0.28, r * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.fill();

        // Label
        if (node.scale > 0.5) {
          // Smaller font on mobile for readability within tight space
          const fontSize = Math.max(8, (isMobile ? 10 : 12) * p.scale);
          ctx.font = `bold ${fontSize}px 'Plus Jakarta Sans', sans-serif`;
          const textW = ctx.measureText(node.label).width;
          const padX = 6;
          const padY = 3;
          const boxW = textW + padX * 2;
          const boxH = fontSize + padY * 2;
          const bx = p.sx - boxW / 2;
          const by = p.sy + r + 5;

          ctx.fillStyle = "rgba(255,255,255,0.92)";
          ctx.beginPath();
          ctx.roundRect(bx, by, boxW, boxH, boxH / 2);
          ctx.fill();

          ctx.strokeStyle = "rgba(26,26,46,0.1)";
          ctx.lineWidth = 0.5;
          ctx.stroke();

          ctx.fillStyle = "#1a1a2e";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(node.label, p.sx, by + boxH / 2);
        }
      });

      // Tooltip (desktop hover only)
      if (hoveredNode !== null) {
        const desc = nodes[hoveredNode].desc;
        ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
        const tw = ctx.measureText(desc).width;
        const tp = 10;
        const tx = Math.min(tooltipX + 16, w - tw - tp * 2 - 8);
        const ty = Math.max(tooltipY - 40, 8);
        const th = 34;

        ctx.shadowColor = "rgba(0,0,0,0.08)";
        ctx.shadowBlur = 12;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.roundRect(tx, ty, tw + tp * 2, th, 8);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = "#1a1a2e";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(desc, tx + tp, ty + th / 2);
      }
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // Fade out hint after 3 seconds
  useEffect(() => {
    if (!showHint || !hintRef.current) return;
    const timer = setTimeout(() => {
      gsap.to(hintRef.current, { opacity: 0, duration: 0.8, onComplete: () => setShowHint(false) });
    }, 3000);
    return () => clearTimeout(timer);
  }, [showHint]);

  return (
    <div
      ref={wrapperRef}
      className="w-full h-full min-h-[380px] lg:min-h-[600px] relative"
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%", cursor: "grab" }}
      />
      {/* Mobile drag hint — only rendered on mobile, auto-fades after 3s */}
      {showHint && (
        <div
          ref={hintRef}
          className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 pointer-events-none"
        >
          <span style={{ fontSize: 14 }}>↔</span>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 12,
            color: "#6b7280",
            whiteSpace: "nowrap",
          }}>
            Drag to explore
          </span>
        </div>
      )}
    </div>
  );
}
