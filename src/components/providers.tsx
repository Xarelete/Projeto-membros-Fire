"use client";

import * as React from "react";

// --- Theme Provider ---
type Theme = "dark" | "light" | "system";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialThemeState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext =
  React.createContext<ThemeProviderState>(initialThemeState);

export function useTheme() {
  const context = React.useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// --- Auth Provider ---
type AuthState = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};

const initialAuthState: AuthState = {
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
};

const AuthContext = React.createContext<AuthState>(initialAuthState);

export function useAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}


// --- Combined Providers ---
export function Providers({ children }: { children: React.ReactNode }) {
  // Theme State
  const [theme, setTheme] = React.useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "system";
    }
    return "system";
  });

  // Auth State
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("isAuthenticated") === "true";
    }
    return false;
  });

  React.useEffect(() => {
    // Theme effect
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    let effectiveTheme = theme;
    if (theme === "system") {
      effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    }

    root.classList.add(effectiveTheme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const authContextValue = React.useMemo(() => ({
    isAuthenticated,
    login: () => {
        localStorage.setItem("isAuthenticated", "true");
        setIsAuthenticated(true);
    },
    logout: () => {
        localStorage.removeItem("isAuthenticated");
        setIsAuthenticated(false);
    },
  }), [isAuthenticated]);

  const themeContextValue = React.useMemo(() => ({
    theme,
    setTheme,
  }), [theme, setTheme]);

  return (
    <AuthContext.Provider value={authContextValue}>
        <ThemeProviderContext.Provider value={themeContextValue}>
            {children}
        </ThemeProviderContext.Provider>
    </AuthContext.Provider>
  );
}
