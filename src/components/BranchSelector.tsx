"use client";
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, X } from "lucide-react";
import { branches } from "@/data/branches";
import { trackEvent } from "@/lib/analytics";

export type SelectorMode = "call" | "directions";
export function BranchSelector({ open, mode, onClose }: { open: boolean; mode: SelectorMode; onClose: () => void }) {
  const dialog = useRef<HTMLDivElement>(null); const [selected, setSelected] = useState<string>();
  useEffect(() => { if (!open) return; setSelected(undefined); const previous = document.activeElement as HTMLElement; document.body.style.overflow="hidden"; setTimeout(()=>dialog.current?.querySelector<HTMLElement>("button")?.focus(),0);
    const key=(e:KeyboardEvent)=>{ if(e.key==="Escape") onClose(); if(e.key==="Tab"&&dialog.current){const f=[...dialog.current.querySelectorAll<HTMLElement>('button,a[href]')]; if(!f.length)return; const first=f[0],last=f[f.length-1]; if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()} else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}}; document.addEventListener("keydown",key); return()=>{document.body.style.overflow="";document.removeEventListener("keydown",key);previous?.focus()}; },[open,onClose]);
  if(!open) return null;
  return <div className="overlay" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><div className="drawer" role="dialog" aria-modal="true" aria-labelledby="selector-title" ref={dialog}>
    <button className="icon-button close" onClick={onClose} aria-label="Cerrar selector"><X/></button><p className="eyebrow">Elegí una sede</p><h2 id="selector-title">{mode === "call" ? "¿Con qué sede querés comunicarte?" : "¿A qué sede querés llegar?"}</h2><p className="drawer-lead">Seleccioná una opción para ver los datos antes de continuar.</p>
    <div className="selector-list">{branches.map(b=><div className={`selector-branch ${selected===b.id?"selected":""}`} key={b.id}><button onClick={()=>{setSelected(b.id);trackEvent("branch_select",{branch:b.id})}} aria-expanded={selected===b.id}><span><strong>{b.name}</strong>{b.area&&<small>{b.area}</small>}</span><span>Elegir</span></button>{selected===b.id&&<div className="selector-detail"><p><MapPin size={17}/>{b.address}</p><div className="button-row"><a className="button primary" href={b.phoneHref} onClick={()=>trackEvent("phone_click",{branch:b.id})}><Phone/>Llamar</a><a className="button outline" href={b.mapsUrl} target="_blank" rel="noreferrer" onClick={()=>trackEvent("directions_click",{branch:b.id})}><MapPin/>Cómo llegar</a></div></div>}</div>)}</div>
  </div></div>;
}
