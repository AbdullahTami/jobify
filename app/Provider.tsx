import { ThemeProvider } from "@/components/ThemeProvider";
import React, { PropsWithChildren } from "react";

export default function Provider({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
