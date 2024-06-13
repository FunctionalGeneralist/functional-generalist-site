import { atom } from "jotai";
import { ReactElement } from "react";

// Pings info endpoint to log that someone has visited the site, only does it on first visit.
export const visitLoggedAtom = atom(false)

// Used for mobile resizing.
export const screenIsSmallAtom = atom(false)

// Hidden as in "display: none", collapsed can still be accessed.
export const sidebarIsHiddenAtom = atom(false) 
export const sidebarIsCollapsedAtom = atom(true)
export const sidebarContentAtom = atom<ReactElement[]>([])
