import { createContext, type Dispatch, type SetStateAction } from "react";
import type { CartItem } from "./types";

export const CartContext = createContext<[CartItem[], Dispatch<SetStateAction<CartItem[]>>]>([[], () => {}]);