/**
 * Performance Photon product data table
 *
 * Edit this file to update the catalogue. Each object is one product.
 *
 * image: Add the image file to public/products, then enter its path here.
 *        Example: "/products/pp-li-720.jpg". Leave it blank to use the
 *        existing concept illustration.
 * value: Leave a value blank to display "To be confirmed" on the website.
 * isNew: Set true to include a product in the 2026 preview collection.
 */

export type FamilyId = "linear-indoor" | "under-canopy" | "hps" | "one-driver" | "greenhouse" | "spectrometer";
export type ProductSpecification = { label: string; value: string };
export type ProductRecord = {
  id: string;
  family: FamilyId;
  title: string;
  model: string;
  number: string;
  isNew: boolean;
  image: string;
  description: string;
  application: string;
  specifications: ProductSpecification[];
};

type HorticultureValues = Partial<Record<"inputPower" | "photonOutput" | "efficacy" | "spectrum" | "dimming" | "inputVoltage", string>>;
type SpectrometerValues = Partial<Record<"wavelengthRange" | "measurementRange" | "accuracy" | "connectivity" | "dimensions", string>>;

const horticultureSpecifications = (values: HorticultureValues = {}): ProductSpecification[] => [
  { label: "Input power", value: values.inputPower || "" },
  { label: "Photon output (PPF)", value: values.photonOutput || "" },
  { label: "Efficacy (PPE)", value: values.efficacy || "" },
  { label: "Spectrum", value: values.spectrum || "" },
  { label: "Dimming", value: values.dimming || "" },
  { label: "Input voltage", value: values.inputVoltage || "" },
];

const spectrometerSpecifications = (values: SpectrometerValues = {}): ProductSpecification[] => [
  { label: "Wavelength range", value: values.wavelengthRange || "" },
  { label: "Measurement range", value: values.measurementRange || "" },
  { label: "Accuracy", value: values.accuracy || "" },
  { label: "Connectivity", value: values.connectivity || "" },
  { label: "Dimensions", value: values.dimensions || "" },
];

export const productRows: ProductRecord[] = [
  // Linear indoor LED — 8 products
  { id: "linear-indoor-1", family: "linear-indoor", title: "Linear Indoor 01", model: "", number: "01", isNew: true, image: "", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications({
    // inputPower: "", photonOutput: "", efficacy: "", spectrum: "", dimming: "", inputVoltage: "",
  }) },
  { id: "linear-indoor-2", family: "linear-indoor", title: "Linear Indoor 02", model: "", number: "02", isNew: false, image: "", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications() },
  { id: "linear-indoor-3", family: "linear-indoor", title: "Linear Indoor 03", model: "", number: "03", isNew: false, image: "", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications() },
  { id: "linear-indoor-4", family: "linear-indoor", title: "Linear Indoor 04", model: "", number: "04", isNew: false, image: "", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications() },
  { id: "linear-indoor-5", family: "linear-indoor", title: "Linear Indoor 05", model: "", number: "05", isNew: false, image: "", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications() },
  { id: "linear-indoor-6", family: "linear-indoor", title: "Linear Indoor 06", model: "", number: "06", isNew: false, image: "", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications() },
  { id: "linear-indoor-7", family: "linear-indoor", title: "Linear Indoor 07", model: "", number: "07", isNew: false, image: "", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications() },
  { id: "linear-indoor-8", family: "linear-indoor", title: "Linear Indoor 08", model: "", number: "08", isNew: false, image: "", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications() },

  // Under canopy — 2 products
  { id: "under-canopy-1", family: "under-canopy", title: "Under Canopy 01", model: "", number: "01", isNew: true, image: "", description: "Explore supplemental lighting positioned beneath the plant canopy.", application: "Supplemental canopy lighting", specifications: horticultureSpecifications() },
  { id: "under-canopy-2", family: "under-canopy", title: "Under Canopy 02", model: "", number: "02", isNew: false, image: "", description: "Explore supplemental lighting positioned beneath the plant canopy.", application: "Supplemental canopy lighting", specifications: horticultureSpecifications() },

  // HPS — 4 products
  { id: "hps-1", family: "hps", title: "HPS 01", model: "", number: "01", isNew: false, image: "", description: "Explore high-pressure sodium lighting options for horticulture.", application: "Horticultural HPS lighting", specifications: horticultureSpecifications() },
  { id: "hps-2", family: "hps", title: "HPS 02", model: "", number: "02", isNew: false, image: "", description: "Explore high-pressure sodium lighting options for horticulture.", application: "Horticultural HPS lighting", specifications: horticultureSpecifications() },
  { id: "hps-3", family: "hps", title: "HPS 03", model: "", number: "03", isNew: false, image: "", description: "Explore high-pressure sodium lighting options for horticulture.", application: "Horticultural HPS lighting", specifications: horticultureSpecifications() },
  { id: "hps-4", family: "hps", title: "HPS 04", model: "", number: "04", isNew: false, image: "", description: "Explore high-pressure sodium lighting options for horticulture.", application: "Horticultural HPS lighting", specifications: horticultureSpecifications() },

  // One driver — 2 products
  { id: "one-driver-1", family: "one-driver", title: "One Driver 01", model: "", number: "01", isNew: true, image: "", description: "Explore the single-driver lighting collection.", application: "Single-driver lighting", specifications: horticultureSpecifications() },
  { id: "one-driver-2", family: "one-driver", title: "One Driver 02", model: "", number: "02", isNew: false, image: "", description: "Explore the single-driver lighting collection.", application: "Single-driver lighting", specifications: horticultureSpecifications() },

  // Greenhouse — 1 product
  { id: "greenhouse-1", family: "greenhouse", title: "Greenhouse 01", model: "", number: "01", isNew: true, image: "", description: "Explore supplemental lighting for greenhouse growing environments.", application: "Greenhouse cultivation", specifications: horticultureSpecifications() },

  // Spectrometer — 2 products
  { id: "spectrometer-1", family: "spectrometer", title: "Spectrometer 01", model: "", number: "01", isNew: false, image: "", description: "Explore instruments for understanding the light in your growing environment.", application: "Light measurement", specifications: spectrometerSpecifications() },
  { id: "spectrometer-2", family: "spectrometer", title: "Spectrometer 02", model: "", number: "02", isNew: false, image: "", description: "Explore instruments for understanding the light in your growing environment.", application: "Light measurement", specifications: spectrometerSpecifications() },
];
