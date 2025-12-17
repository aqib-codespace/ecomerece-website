"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "./slices/cartSlice";
import { setWishlist } from "./slices/wishlistSlice";
import { setUser, setLoading } from "./slices/userSlice";
import { supabase } from "@/lib/supabaseClient";


export default function StoreInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeStore = async () => {
      try {
        dispatch(setLoading(true));
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.user) {
          dispatch(setUser(session.user));
          await loadUserData(session.user.id, dispatch);
        } else {
          loadGuestData(dispatch);
        }

        dispatch(setLoading(false));
      } catch (error) {
        console.error("Error initializing store:", error);
        dispatch(setLoading(false));
      }
    };

    initializeStore();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        dispatch(setUser(session.user));

        const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
        const guestWishlist = JSON.parse(
          localStorage.getItem("guestWishlist") || "[]"
        );

        if (guestCart.length > 0) {
          dispatch(setCart(guestCart));
        }

        if (guestWishlist.length > 0) {
          dispatch(setWishlist(guestWishlist));
        }

        localStorage.removeItem("guestCart");
        localStorage.removeItem("guestWishlist");
      } else if (event === "SIGNED_OUT") {
        dispatch(setUser(null));
        dispatch(setCart([]));
        dispatch(setWishlist([]));
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [dispatch]);

  return null;
}


async function loadUserData(userId, dispatch) {
  try {

    const savedCart = localStorage.getItem(`userCart_${userId}`);
    const savedWishlist = localStorage.getItem(`userWishlist_${userId}`);

    if (savedCart) {
      dispatch(setCart(JSON.parse(savedCart)));
    }

    if (savedWishlist) {
      dispatch(setWishlist(JSON.parse(savedWishlist)));
    }
  } catch (error) {
    console.error("Error loading user data:", error);
  }
}


function loadGuestData(dispatch) {
  try {
    const guestCart = localStorage.getItem("guestCart");
    const guestWishlist = localStorage.getItem("guestWishlist");

    if (guestCart) {
      dispatch(setCart(JSON.parse(guestCart)));
    }

    if (guestWishlist) {
      dispatch(setWishlist(JSON.parse(guestWishlist)));
    }
  } catch (error) {
    console.error("Error loading guest data:", error);
  }
}
