"use client";

import { createContext, useCallback, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { AUTH_STORAGE_KEY } from "@/constants";
import { demoCredential } from "@/data/auth";
import type { AuthUser } from "@/types";

const AUTH_EVENT = "bytespace:auth-change";

interface AuthResult {
  ok: boolean;
  error?: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  login: (email: string, password: string) => AuthResult;
  signup: (name: string, email: string) => AuthResult;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

function subscribe(callback: () => void) {
  window.addEventListener(AUTH_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(AUTH_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function readStoredUser(): string | null {
  try {
    return window.localStorage.getItem(AUTH_STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeStoredUser(next: AuthUser | null) {
  try {
    if (next) window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(next));
    else window.localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch {
    return;
  }
  window.dispatchEvent(new Event(AUTH_EVENT));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const stored = useSyncExternalStore(subscribe, readStoredUser, () => null);

  const user = useMemo<AuthUser | null>(() => {
    if (!stored) return null;
    try {
      return JSON.parse(stored) as AuthUser;
    } catch {
      return null;
    }
  }, [stored]);

  const login = useCallback((email: string, password: string): AuthResult => {
    const matches =
      email.trim().toLowerCase() === demoCredential.email && password === demoCredential.password;
    if (!matches) {
      return { ok: false, error: "Invalid email or password." };
    }
    writeStoredUser({ name: demoCredential.name, email: demoCredential.email });
    return { ok: true };
  }, []);

  const signup = useCallback((name: string, email: string): AuthResult => {
    writeStoredUser({ name: name.trim(), email: email.trim().toLowerCase() });
    return { ok: true };
  }, []);

  const logout = useCallback(() => writeStoredUser(null), []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, login, signup, logout }),
    [user, login, signup, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
