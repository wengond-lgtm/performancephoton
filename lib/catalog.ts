export const families = [
  { id: "linear-indoor", name: "Linear Indoor LED", short: "Linear Indoor", count: 8, description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation" },
  { id: "under-canopy", name: "Under Canopy", short: "Under Canopy", count: 2, description: "Explore supplemental lighting positioned beneath the plant canopy.", application: "Supplemental canopy lighting" },
  { id: "hps", name: "HPS", short: "HPS", count: 4, description: "Explore high-pressure sodium lighting options for horticulture.", application: "Horticultural HPS lighting" },
  { id: "one-driver", name: "One Driver", short: "One Driver", count: 2, description: "Explore the single-driver lighting collection.", application: "Single-driver lighting" },
  { id: "greenhouse", name: "Greenhouse", short: "Greenhouse", count: 1, description: "Explore supplemental lighting for greenhouse growing environments.", application: "Greenhouse cultivation" },
  { id: "spectrometer", name: "Spectrometer", short: "Spectrometer", count: 2, description: "Explore instruments for understanding the light in your growing environment.", application: "Light measurement" },
] as const;
export type FamilyId = (typeof families)[number]["id"];
export type Product = { id: string; family: FamilyId; title: string; number: string; isNew: boolean };
// These are catalogue positions from the supplied brief, not manufacturer model numbers.
export const products: Product[] = families.flatMap(f => Array.from({ length: f.count }, (_, i) => ({
  id: `${f.id}-${i + 1}`, family: f.id, title: `${f.short} ${String(i + 1).padStart(2, "0")}`,
  number: String(i + 1).padStart(2, "0"),
  isNew: i === 0 && ["linear-indoor", "under-canopy", "one-driver", "greenhouse"].includes(f.id),
})));
export const newProducts = products.filter(p => p.isNew);
export function getFamily(id: string) { return families.find(f => f.id === id)!; }
