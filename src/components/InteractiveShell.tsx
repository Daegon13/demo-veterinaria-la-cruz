"use client";
import { useCallback, useState } from "react";
import { MapPin, Phone, Store } from "lucide-react";
import { BranchSelector, SelectorMode } from "./BranchSelector";
import { trackEvent, EventName } from "@/lib/analytics";
export function InteractiveShell({ children }: { children: React.ReactNode }) {
 const [mode,setMode]=useState<SelectorMode|null>(null); const close=useCallback(()=>setMode(null),[]);
 return <><div onClick={e=>{const target=e.target as HTMLElement; const el=target.closest<HTMLElement>("[data-selector]"); if(el){e.preventDefault();setMode(el.dataset.selector as SelectorMode)} const event=target.closest<HTMLElement>("[data-event]")?.dataset.event as EventName|undefined;if(event)trackEvent(event)}}>{children}</div><BranchSelector open={!!mode} mode={mode??"call"} onClose={close}/><nav className="mobile-bar" aria-label="Acciones rápidas"><a href="#sedes"><Store/>Sedes</a><button data-selector="call"><Phone/>Llamar</button><button data-selector="directions"><MapPin/>Cómo llegar</button></nav></>;
}
