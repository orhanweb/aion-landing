// src/components/ui/accordion.tsx
'use client';

import { cn } from '@/lib/utils/cn';
import { createContext, useContext, useId, useState, type ReactNode } from 'react';

type AccordionContextValue = {
  openId: string | null;
  toggle: (id: string) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

export function Accordion({ children, className, defaultOpenId }: { children: ReactNode; className?: string; defaultOpenId?: string }) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <AccordionContext.Provider
      value={{
        openId,
        toggle: id => setOpenId(current => (current === id ? null : id))
      }}
    >
      <div className={cn('flex flex-col gap-3', className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  const id = useId();
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('AccordionItem must be used within Accordion');
  }

  const isOpen = context.openId === id;

  return (
    <div className={cn('rounded-2xl border border-border bg-card', className)}>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => context.toggle(id)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-medium text-foreground">{title}</span>
        <span aria-hidden className={cn('text-muted-foreground transition-transform', isOpen && 'rotate-180')}>
          ▾
        </span>
      </button>
      {isOpen ? <div className="border-t border-border px-6 py-5 text-sm leading-relaxed text-muted-foreground">{children}</div> : null}
    </div>
  );
}
