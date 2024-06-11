import { atom } from "jotai";
import { ReactElement } from "react";

// Used for mobile resizing.
export const screenIsSmallAtom = atom(false)

// Hidden as in "display: none", collapsed can still be accessed.
export const sidebarIsHiddenAtom = atom(false) 
export const sidebarIsCollapsedAtom = atom(true)
export const sidebarContentAtom = atom<ReactElement[]>([])
