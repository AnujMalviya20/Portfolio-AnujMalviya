import { useEffect } from 'react';

export default function useStormBackground(canvasRef, flashRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const flash = flashRef.current;
    if (!canvas || !flash) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── stars ──────────────────────────────────────────────
    const stars = Array.from({ length: 260 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 0.85 + 0.1,
      base: Math.random() * 0.28 + 0.04,
      spd: Math.random() * 8 + 5,
    }));

    // ── slow dark storm clouds ──────────────────────────────
    const clouds = Array.from({ length: 9 }, () => ({
      x: Math.random(),
      y: 0.04 + Math.random() * 0.32,
      rx: 0.16 + Math.random() * 0.22,
      ry: 0.035 + Math.random() * 0.055,
      spd: (0.000007 + Math.random() * 0.000006) * (Math.random() < 0.5 ? 1 : -1),
      alpha: 0.035 + Math.random() * 0.038,
    }));

    // ── lightning ───────────────────────────────────────────
    const bolts = [];

    const makeBolt = (ox, oy) => {
      const segs = [];
      let x = ox, y = oy;
      const steps = 13 + Math.floor(Math.random() * 11);
      const ex = ox + (Math.random() - 0.5) * 280;
      const ey = oy + window.innerHeight * 0.32 + Math.random() * window.innerHeight * 0.32;
      const dx = (ex - ox) / steps;
      const dy = (ey - oy) / steps;

      for (let i = 0; i < steps; i++) {
        const nx = x + dx + (Math.random() - 0.5) * 70;
        const ny = y + dy + Math.random() * 18;
        segs.push({ x1: x, y1: y, x2: nx, y2: ny, br: false });

        if (Math.random() < 0.42 && i > 1) {
          let cx = nx, cy = ny;
          const bc = 3 + Math.floor(Math.random() * 7);
          for (let j = 0; j < bc; j++) {
            const bx = cx + (Math.random() - 0.5) * 52;
            const by = cy + 20 + Math.random() * 26;
            segs.push({ x1: cx, y1: cy, x2: bx, y2: by, br: true });
            cx = bx; cy = by;
            if (Math.random() < 0.28) {
              let cx2 = bx, cy2 = by;
              for (let k = 0; k < 2 + Math.floor(Math.random() * 3); k++) {
                const bx2 = cx2 + (Math.random() - 0.5) * 32;
                const by2 = cy2 + 15 + Math.random() * 16;
                segs.push({ x1: cx2, y1: cy2, x2: bx2, y2: by2, br: true });
                cx2 = bx2; cy2 = by2;
              }
            }
          }
        }
        x = nx; y = ny;
      }
      return { segs, life: 22 + Math.floor(Math.random() * 10), maxLife: 28 };
    };

    const handleClick = (e) => {
      const startX = e.clientX + (Math.random() - 0.5) * 30;
      const startY = Math.max(0, e.clientY - window.innerHeight * 0.3 - Math.random() * 55);
      bolts.push(makeBolt(startX, startY));

      flash.style.opacity = '1';
      setTimeout(() => {
        flash.style.opacity = '0';
        if (Math.random() < 0.38) {
          setTimeout(() => {
            flash.style.opacity = '0.55';
            setTimeout(() => { flash.style.opacity = '0'; }, 42);
          }, 105);
        }
      }, 58);
    };

    window.addEventListener('click', handleClick);

    // ── render loop ─────────────────────────────────────────
    const loop = () => {
      const W = canvas.width;
      const H = canvas.height;
      const t = performance.now() * 0.001;

      ctx.fillStyle = '#00000d';
      ctx.fillRect(0, 0, W, H);

      // stars
      stars.forEach(s => {
        const o = s.base + Math.sin(t / s.spd + s.x * 18) * 0.08;
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,200,255,${Math.max(0, Math.min(0.5, o))})`;
        ctx.fill();
      });

      // dark drifting storm clouds
      clouds.forEach(c => {
        c.x += c.spd;
        if (c.x > 1.3) c.x = -0.3;
        if (c.x < -0.3) c.x = 1.3;
        const grd = ctx.createRadialGradient(c.x * W, c.y * H, 0, c.x * W, c.y * H, c.rx * W);
        grd.addColorStop(0, `rgba(65, 25, 155, ${c.alpha})`);
        grd.addColorStop(0.5, `rgba(40, 10, 120, ${c.alpha * 0.4})`);
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.ellipse(c.x * W, c.y * H, c.rx * W, c.ry * H, 0, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      });

      // bolts
      for (let i = bolts.length - 1; i >= 0; i--) {
        const b = bolts[i];
        const p = b.life / b.maxLife;
        const vis = p * 0.26;

        b.segs.forEach(s => {
          ctx.shadowBlur = s.br ? 3 : 9;
          ctx.shadowColor = `rgba(160, 130, 255, ${vis * 0.55})`;
          ctx.strokeStyle = s.br
            ? `rgba(165, 145, 255, ${vis * 0.4})`
            : `rgba(215, 205, 255, ${vis})`;
          ctx.lineWidth = s.br ? 0.35 : 0.85 + p * 1.3;
          ctx.beginPath();
          ctx.moveTo(s.x1, s.y1);
          ctx.lineTo(s.x2, s.y2);
          ctx.stroke();
          ctx.shadowBlur = 0;
        });

        b.life--;
        if (b.life <= 0) bolts.splice(i, 1);
      }

      // bottom fade to black
      const fade = ctx.createLinearGradient(0, 0, 0, H);
      fade.addColorStop(0.4, 'rgba(0,0,13,0)');
      fade.addColorStop(1, 'rgba(0,0,13,0.97)');
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, W, H);

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleClick);
    };
  }, [canvasRef, flashRef]);
}
