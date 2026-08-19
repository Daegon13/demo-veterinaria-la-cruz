export type EventName = "branch_select" | "phone_click" | "directions_click" | "proposal_whatsapp_click" | "proposal_email_click";
export function trackEvent(name: EventName, detail?: Record<string, string>) {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("demo:analytics", { detail: { name, ...detail } }));
}
