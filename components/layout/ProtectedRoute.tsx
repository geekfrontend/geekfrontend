import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, loading } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // Only initialize the router on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !loading && !isAuthenticated) {
      setShouldRedirect(true);
    }
  }, [isClient, loading, isAuthenticated]);

  // Use router only after ensuring the component is mounted
  const router = useRouter();

  useEffect(() => {
    if (shouldRedirect) {
      router.push("/");
    }
  }, [shouldRedirect, router]);

  if (!isClient || loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-16 h-16 border-4 border-gray-300 border-solid rounded-full animate-spin border-t-transparent dark:border-gray-700"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
