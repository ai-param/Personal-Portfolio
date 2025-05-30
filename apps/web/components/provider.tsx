"use client"
import {ThemeProvider as NextThemeProvider} from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({children,...props}:any){
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}