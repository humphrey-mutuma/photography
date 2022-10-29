import { useSession } from "next-auth/react";
import { createContext, useContext } from "react";
import { useRouter } from "next/router";
import { LoadingIcon } from "../components/Icons/Icons";
import { useCollection } from "swr-firestore-v9";

const UserContext = createContext();

export function UserWrapper({ children }) {
  const { data: session, status } = useSession();
  const { data: admin } = useCollection("admins");
  const router = useRouter();

  const admins = admin?.map((user) => user.email);

  if (!admin) {
    return (
      <div className="flex items-center justify-center w-full p-2">
        <LoadingIcon size={6} />
      </div>
    );
  }

  if (admins.includes(session?.user?.email)) {
    return (
      <div className="max-w-8xl mx-auto">
        <UserContext.Provider value={{ admins }}>
          {children}
        </UserContext.Provider>{" "}
      </div>
    );
  } else {
    router.push("/");
  }
}

UserWrapper.auth = true;

// custom user hook
export function useUserContext() {
  return useContext(UserContext);
}
