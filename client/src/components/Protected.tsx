import { useUser, RedirectToSignIn } from "@clerk/react";

export const Protected = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  if (!isSignedIn) return <RedirectToSignIn />;

  return <>{children}</>;
};