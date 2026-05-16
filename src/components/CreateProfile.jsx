import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "@/lib/supabase";

export default function CreateProfile() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    console.log("CreateProfile loaded:", isLoaded);
    console.log("Clerk user:", user);

    if (!isLoaded || !user) return;

    const createProfile = async () => {
      console.log("Trying to create profile...");

      const { data, error } = await supabase.from("profiles").upsert(
        {
          id: user.id,
          email: user.primaryEmailAddress?.emailAddress || "",
          full_name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
        },
        { onConflict: "id" }
      );

      console.log("Supabase profile data:", data);
      console.log("Supabase profile error:", error);
    };

    createProfile();
  }, [isLoaded, user]);

  return null;
}