import { ref } from "vue";
import { createClient } from '@supabase/supabase-js'

console.log(import.meta.env.VITE_SUPABASE_URL)
export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

const user = ref(null);

type UserInfoType = {
  id?: string;
  email: string;
  password: string;
  user_metadata?: {
    full_name: string;
    avatar_url: string;
  };
  [key: string]: any; // 为了支持...meta，允许任意额外的键值对
};

export function useAuthUser() {

  // login with email and password
  const login = async ({ email, password }: UserInfoType) => {
    const { data, error } = await supabase.auth.signInWithPassword(
      { email, password }
    );
    if (error) throw error;
    return user;
  };

  const loginWithSocialProvider = (provider: any) => { }; // login with social provider
  const logout = async () => { }; // logout
  const isLoggedIn = () => { }; // check if user is logged in

  // register with email and password
  const register = async ({ email, password, ...meta }: UserInfoType): Promise<UserInfoType | null> => {
    const { user, error }: any = await supabase.auth.signUp(
      { email, password }
    )

    if (error) throw error;
    if (user) {
      // Redirect to email verification page
      // You can replace the URL with the actual verification page URL
      window.location.href = "/verify-email";
    }

    return user;
  };

  const update = async (data: any) => { }; // update user profile
  const sendPasswordRestEmail = async (email: string) => { }; // send password reset email

  return {
    user,
    login,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail,
  };
}
