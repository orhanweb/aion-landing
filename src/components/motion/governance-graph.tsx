// src/components/motion/governance-graph.tsx
'use client';

import { motion } from 'motion/react';
import { useReducedMotion } from '@/components/motion/use-reduced-motion';

const NODE_RADIUS = 26;
const LABEL_FONT = 'var(--font-ibm-plex-mono)';

type GraphNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  labelPlacement: 'above' | 'below';
};

const nodes: GraphNode[] = [
  { id: 'ai', label: 'AI System', x: 200, y: 58, labelPlacement: 'above' },
  { id: 'risk', label: 'Risk', x: 88, y: 158, labelPlacement: 'below' },
  { id: 'policy', label: 'Policy', x: 312, y: 158, labelPlacement: 'below' },
  { id: 'audit', label: 'Audit', x: 200, y: 252, labelPlacement: 'below' }
];

const edges = [
  { from: 'ai', to: 'risk' },
  { from: 'ai', to: 'policy' },
  { from: 'risk', to: 'audit' },
  { from: 'policy', to: 'audit' }
];

function getNode(id: string): GraphNode {
  return nodes.find(node => node.id === id)!;
}

function getEdgeEndpoints(from: GraphNode, to: GraphNode, radius: number): { x1: number; y1: number; x2: number; y2: number } {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.hypot(dx, dy);

  if (distance === 0) {
    return { x1: from.x, y1: from.y, x2: to.x, y2: to.y };
  }

  const unitX = dx / distance;
  const unitY = dy / distance;

  return {
    x1: from.x + unitX * radius,
    y1: from.y + unitY * radius,
    x2: to.x - unitX * radius,
    y2: to.y - unitY * radius
  };
}

function getLabelY(node: GraphNode): number {
  const gap = 12;
  return node.labelPlacement === 'above' ? node.y - NODE_RADIUS - gap : node.y + NODE_RADIUS + gap;
}

export function GovernanceGraph() {
  const reduced = useReducedMotion();

  return (
    <svg viewBox="0 0 400 300" className="h-full w-full overflow-visible" aria-hidden role="img">
      <g fill="none" stroke="rgba(184, 149, 106, 0.45)" strokeWidth="1">
        {edges.map((edge, index) => {
          const from = getNode(edge.from);
          const to = getNode(edge.to);
          const { x1, y1, x2, y2 } = getEdgeEndpoints(from, to, NODE_RADIUS);

          return (
            <motion.line
              key={`${edge.from}-${edge.to}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              initial={reduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.25 + index * 0.12,
                ease: 'easeOut'
              }}
            />
          );
        })}
      </g>

      {nodes.map((node, index) => (
        <g key={node.id}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={NODE_RADIUS}
            fill="var(--ink-elevated)"
            stroke="var(--accent)"
            strokeWidth="1"
            initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08 + index * 0.08 }}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={3}
            fill="var(--accent)"
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.35 + index * 0.08 }}
          />
          <motion.text
            x={node.x}
            y={getLabelY(node)}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--foreground)"
            fontSize="9"
            fontFamily={LABEL_FONT}
            letterSpacing="0.12em"
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
          >
            {node.label.toUpperCase()}
          </motion.text>
        </g>
      ))}
    </svg>
  );
}
