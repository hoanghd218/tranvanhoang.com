"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

type Theme = "light" | "dark"

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
    mounted: boolean
}

// Void black is the ground, not a theme — dark is the default scope and
// `light` is the opt-in "stone" scope.
const ThemeContext = React.createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { },
    mounted: false,
})

export function useTheme() {
    return React.useContext(ThemeContext)
}

interface ThemeProviderProps {
    children: React.ReactNode
    defaultTheme?: Theme
}

export function ThemeProvider({ children, defaultTheme = "dark" }: ThemeProviderProps) {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme)
    const [mounted, setMounted] = React.useState(false)

    // Load theme from localStorage on mount. Only an explicit saved choice
    // moves off the brand default — the OS preference does not.
    React.useEffect(() => {
        setMounted(true)
        const savedTheme = localStorage.getItem("theme") as Theme | null
        if (savedTheme === "light" || savedTheme === "dark") {
            setTheme(savedTheme)
        }
    }, [])

    // Apply the light scope class to <html>. Dark needs no class — it is :root.
    React.useEffect(() => {
        if (!mounted) return

        const root = document.documentElement
        if (theme === "light") {
            root.classList.add("light")
        } else {
            root.classList.remove("light")
        }
        localStorage.setItem("theme", theme)
    }, [theme, mounted])

    const toggleTheme = React.useCallback(() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
            {children}
        </ThemeContext.Provider>
    )
}

interface ThemeToggleProps {
    className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const { theme, toggleTheme, mounted } = useTheme()

    // Render placeholder with same dimensions during SSR
    if (!mounted) {
        return (
            <div
                className={cn(
                    "w-9 h-9 rounded-[var(--radius-sm)] bg-surface-card border border-hairline",
                    className
                )}
            />
        )
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)]",
                "bg-surface-card border border-hairline",
                "transition-[color,background-color,border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]",
                "hover:border-hairline-accent hover:bg-surface-overlay hover:shadow-glow-sm",
                "active:scale-[var(--press-scale)]",
                "cursor-pointer",
                className
            )}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
            <Sun
                strokeWidth={1.75}
                className={cn(
                    "absolute w-5 h-5 text-rocket transition-all duration-[var(--duration-base)] ease-[var(--ease-trajectory)]",
                    theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-90"
                )}
            />
            <Moon
                strokeWidth={1.75}
                className={cn(
                    "absolute w-5 h-5 text-rocket transition-all duration-[var(--duration-base)] ease-[var(--ease-trajectory)]",
                    theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-90"
                )}
            />
        </button>
    )
}

