import { supabase } from "./supabaseClient";

export async function signUp({
  email,
  password,
  firstName,
  lastName,
  username,
}) {
  // Passing user metadata
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { first_name: firstName, last_name: lastName, username },
    },
  });
  return { data, error };
}

export async function signIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function sendPasswordResetEmail(email) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000");
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${siteUrl}/reset-password`,
  });
  return { data, error };
}

export async function verifyOtp({ email, token }) {
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "signup",
  });
  return { data, error };
}
