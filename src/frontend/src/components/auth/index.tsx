import {
  InternetIdentityProvider,
  useInternetIdentity,
} from "@/hooks/useInternetIdentity";
import type { PropsWithChildren } from "react";

export function AuthProvider({ children }: PropsWithChildren) {
  return <InternetIdentityProvider>{children}</InternetIdentityProvider>;
}

export function useAuth() {
  const { identity, login, clear, isLoggingIn, isInitializing } =
    useInternetIdentity();
  const isAuthenticated = !!identity && !identity.getPrincipal().isAnonymous();

  return {
    isAuthenticated,
    isLoggingIn,
    isInitializing,
    login,
    logout: clear,
    principal: isAuthenticated ? identity?.getPrincipal().toString() : null,
  };
}
