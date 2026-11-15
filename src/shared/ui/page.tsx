import type { ReactNode } from "react";

interface PageProps {
  title: string;
  children: ReactNode;
}

export function Page({ title, children }: PageProps) {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
        {title}
      </h1>
      {children}
    </div>
  );
}
