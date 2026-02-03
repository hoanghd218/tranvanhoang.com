"use client"

import { ThemeProvider as ThemeProviderBase } from "@/components/custom/theme-provider"

interface ProvidersProps {
    children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
    return <ThemeProviderBase>{children}</ThemeProviderBase>
}
