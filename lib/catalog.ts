import { productRows, type FamilyId, type ProductRecord } from "@/data/products";

export type { FamilyId, ProductRecord as Product };

export type Family = { id: FamilyId; name: string; short: string; count: number };

const familyDetails: Array<Omit<Family, "count">> = [
  { id: "linear-indoor", name: "Linear Indoor LED", short: "Linear Indoor" },
  { id: "under-canopy", name: "Under Canopy", short: "Under Canopy" },
  { id: "hps", name: "HPS", short: "HPS" },
  { id: "one-driver", name: "One Driver", short: "One Driver" },
  { id: "greenhouse", name: "Greenhouse", short: "Greenhouse" },
  { id: "spectrometer", name: "Spectrometer", short: "Spectrometer" },
  { id: "control-system", name: "Control System", short: "Control System" },
];

export const products = productRows;
export const families: Family[] = familyDetails.map((family) => ({
  ...family,
  count: products.filter((product) => product.family === family.id).length,
}));
const previewOrder = ["linear-indoor-5", "linear-indoor-3", "one-driver-1", "linear-indoor-6"];
export const newProducts = previewOrder
  .map((id) => products.find((product) => product.id === id))
  .filter((product): product is ProductRecord => Boolean(product));
export function getFamily(id: string) { return families.find((family) => family.id === id)!; }
