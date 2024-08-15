import { auth } from "@/auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const useAuthCall = () => {
  const router = useRouter();
  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
      });
      toastSuccessNotify("Register successfully");
      router.push("/login");
    } catch (error) {
      toastErrorNotify(error.message);
      console.log(error);
    }
  };
  return { createUser };
};

export default useAuthCall;
