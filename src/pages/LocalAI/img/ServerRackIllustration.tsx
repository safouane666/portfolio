import { motion } from 'framer-motion';

import classes from './ServerRackIllustration.module.css';

const pulse = {
  animate: {
    opacity: [0.35, 1, 0.35],
    transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
  },
};

export function ServerRackIllustration() {
  return (
    <svg
      className={classes.svg}
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="rackGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--mantine-color-cyan-5)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--mantine-color-blue-6)" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="flowLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--mantine-color-cyan-4)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--mantine-color-cyan-4)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--mantine-color-cyan-4)" stopOpacity="0" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="210" cy="380" rx="140" ry="18" fill="url(#rackGlow)" opacity="0.15" />

      <rect
        x="95"
        y="55"
        width="230"
        height="300"
        rx="14"
        stroke="url(#rackGlow)"
        strokeWidth="2"
        fill="light-dark(rgba(6, 182, 212, 0.06), rgba(8, 47, 73, 0.5))"
      />

      {[0, 1, 2, 3, 4].map((row) => (
        <g key={row}>
          <rect
            x="115"
            y={85 + row * 52}
            width="190"
            height="38"
            rx="6"
            stroke="light-dark(rgba(6, 182, 212, 0.35), rgba(34, 211, 238, 0.4))"
            strokeWidth="1.5"
            fill="light-dark(rgba(240, 249, 255, 0.9), rgba(15, 23, 42, 0.85))"
          />
          <circle cx="132" cy={104 + row * 52} r="5" fill="var(--mantine-color-cyan-5)" opacity="0.85" />
          <motion.rect
            x="148"
            y={98 + row * 52}
            width={40 + row * 12}
            height="12"
            rx="3"
            fill="url(#rackGlow)"
            opacity="0.5"
            variants={pulse}
            animate="animate"
            transition={{ delay: row * 0.15 }}
          />
          {[0, 1, 2].map((led) => (
            <motion.circle
              key={led}
              cx={280 + led * 14}
              cy={104 + row * 52}
              r="4"
              fill="var(--mantine-color-cyan-4)"
              variants={pulse}
              animate="animate"
              transition={{ delay: row * 0.2 + led * 0.3 }}
            />
          ))}
        </g>
      ))}

      <motion.path
        d="M 210 120 Q 175 210 210 300 Q 245 210 210 120"
        stroke="url(#flowLine)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="8 6"
        filter="url(#glow)"
        animate={{ strokeDashoffset: [0, -28] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.path
        d="M 150 200 L 270 200"
        stroke="url(#flowLine)"
        strokeWidth="1.5"
        strokeDasharray="6 8"
        animate={{ strokeDashoffset: [0, -28] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
      />
      <motion.path
        d="M 170 260 L 250 260"
        stroke="url(#flowLine)"
        strokeWidth="1.5"
        strokeDasharray="6 8"
        animate={{ strokeDashoffset: [0, -28] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.4 }}
      />

      <motion.circle
        cx="210"
        cy="210"
        r="28"
        stroke="var(--mantine-color-cyan-5)"
        strokeWidth="2"
        fill="light-dark(rgba(6, 182, 212, 0.12), rgba(34, 211, 238, 0.15))"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '210px 210px' }}
      />
      <text
        x="210"
        y="216"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="var(--mantine-color-cyan-6)"
        fontFamily="system-ui, sans-serif"
      >
        AI
      </text>

      <text
        x="210"
        y="42"
        textAnchor="middle"
        fontSize="10"
        fill="light-dark(var(--mantine-color-gray-6), var(--mantine-color-gray-4))"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.12em"
      >
        ON-PREMISE
      </text>
    </svg>
  );
}
