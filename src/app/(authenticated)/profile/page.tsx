import { Suspense } from "react";

import { LogoutButton } from "./_components/logout-button";
import { ProfileDetails } from "./_components/profile-details";

export default function ProfilePage() {
  return (
    <div className="max-w-sm space-y-6">
      <h1 className="text-xl font-semibold">My Profile</h1>

      <Suspense
        fallback={<p className="text-sm text-foreground/60">Loading…</p>}
      >
        <ProfileDetails />
      </Suspense>

      <LogoutButton />
    </div>
  );
}
