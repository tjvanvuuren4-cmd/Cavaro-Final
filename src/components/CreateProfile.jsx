import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "@/lib/supabase";

export default function CreateProfile() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    console.log("SUPABASE URL:", import.meta.env.VITE_SUPABASE_URL);
    console.log("SUPABASE KEY EXISTS:", !!import.meta.env.VITE_SUPABASE_ANON_KEY);
    console.log("CreateProfile loaded:", isLoaded);
    console.log("Clerk user:", user);

    if (!isLoaded || !user) return;

    const createProfile = async () => {
      console.log("Trying to create profile...");

      const { data, error, status, statusText } = await supabase
        .from("profiles")
        .upsert(
          {
            id: user.id,
            email: user.primaryEmailAddress?.emailAddress || "",
            full_name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
          },
          { onConflict: "id" }
        )
        .select();

      console.log("Supabase profile status:", status);
      console.log("Supabase profile statusText:", statusText);
      console.log("Supabase profile data:", data);
      console.log("Supabase profile error:", error);
    };

    createProfile();
  }, [isLoaded, user]);

  return null;
}