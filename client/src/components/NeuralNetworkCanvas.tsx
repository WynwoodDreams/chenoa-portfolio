import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const LINK_DISTANCE = 140;
const MOUSE_RADIUS = 190;
const MAX_SPEED = 0.6;
const ACCENT = '0, 229, 255';

/**
 * Decorative particle network. Sizes itself to its parent, renders crisply on
 * high-DPI screens, pauses when off-screen or in a hidden tab, and draws a
 * single static frame for visitors who prefer reduced motion.
 */
export default function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let inView = true;

    const makeNode = (): Node => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.6 + 0.8,
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < LINK_DISTANCE * LINK_DISTANCE) {
            const alpha = (1 - Math.sqrt(distSq) / LINK_DISTANCE) * 0.28;
            ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        const mdx = mouse.x - node.x;
        const mdy = mouse.y - node.y;
        const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
        const near = mouseDist < MOUSE_RADIUS;

        if (near) {
          ctx.strokeStyle = `rgba(${ACCENT}, ${(1 - mouseDist / MOUSE_RADIUS) * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(${ACCENT}, ${near ? 0.85 : 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const node of nodes) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.02;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }

        // Ease back to cruising speed instead of damping to a standstill.
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > MAX_SPEED) {
          node.vx *= 0.96;
          node.vy *= 0.96;
        }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      }
    };

    const loop = () => {
      step();
      draw();
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const sync = () => {
      const shouldRun = !reduceMotion && inView && !document.hidden;
      if (shouldRun && !raf) raf = requestAnimationFrame(loop);
      if (!shouldRun) stop();
    };

    const resize = () => {
      const nextWidth = canvas.clientWidth;
      const nextHeight = canvas.clientHeight;
      if (!nextWidth || !nextHeight) return;

      // Keep existing nodes in place (rescaled) so resizes don't reshuffle the field.
      if (width && height) {
        for (const node of nodes) {
          node.x *= nextWidth / width;
          node.y *= nextHeight / height;
        }
      }
      width = nextWidth;
      height = nextHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.min(110, Math.floor((width * height) / 16000));
      while (nodes.length < target) nodes.push(makeNode());
      nodes.length = Math.min(nodes.length, target);

      draw();
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    intersectionObserver.observe(canvas);

    resize();
    sync();

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', sync);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}
