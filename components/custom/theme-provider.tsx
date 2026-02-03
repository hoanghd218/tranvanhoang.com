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

const ThemeContext = React.createContext<ThemeContextType>({
    theme: "light",
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

export function ThemeProvider({ children, defaultTheme = "light" }: ThemeProviderProps) {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme)
    const [mounted, setMounted] = React.useState(false)

    // Load theme from localStorage on mount
    React.useEffect(() => {
        setMounted(true)
        const savedTheme = localStorage.getItem("theme") as Theme | null
        if (savedTheme) {
            setTheme(savedTheme)
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        }
    }, [])

    // Apply theme class to html element
    React.useEffect(() => {
        if (!mounted) return

        const root = document.documentElement
        if (theme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
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
                    "w-9 h-9 rounded-lg bg-card border border-border",
                    className
                )}
            />
        )
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative inline-flex items-center justify-center w-9 h-9 rounded-lg",
                "bg-card border border-border transition-all duration-300",
                "hover:border-coral hover:bg-coral/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "cursor-pointer",
                className
            )}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
            <Sun
                className={cn(
                    "absolute w-5 h-5 text-coral transition-all duration-300",
                    theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
                )}
            />
            <Moon
                className={cn(
                    "absolute w-5 h-5 text-coral transition-all duration-300",
                    theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                )}
            />
        </button>
    )
}

