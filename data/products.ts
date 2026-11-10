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

export type FamilyId = "linear-indoor" | "under-canopy" | "hps" | "one-driver" | "greenhouse" | "spectrometer" | "control-system";
export type ProductSpecification = { label: string; value: string; section?: boolean };
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

type HorticultureValues = Partial<Record<"inputPower" | "photonOutput" | "efficacy" | "dimming" | "lifetime" | "inputVoltage" | "warranty", string>>;
type SpectrometerValues = Partial<Record<"wavelengthRange" | "measurementRange" | "accuracy" | "connectivity" | "dimensions", string>>;
type HpsValues = Partial<Record<"lampNumber" | "lampWatts" | "inputVolts" | "inputCurrent" | "inputPower" | "highPpe" | "photonFlux" | "minPowerFactor" | "thd" | "crestFactor", string>>;
type HpsLampValues = Partial<Record<"baseDesignation" | "bulbDesignation" | "bulbDiameter" | "maxOverallLength" | "lightOutput" | "lumensPerWatt" | "ratedLife" | "colorTemperature" | "chromaticity" | "cri" | "burningPosition" | "warmUpTime" | "hotRestartTime" | "photonFlux", string>>;
type PowerSupplyValues = Partial<Record<"maxOutputPower" | "outputRatedVoltage" | "maximumOutputCurrent" | "ratedInputVoltage" | "inputFrequency" | "powerFactor" | "thd" | "communicationMethod" | "heatDissipationMethod" | "maxOutputModes" | "fixturesPerPowerSupply", string>>;
type ControllerValues = Partial<Record<"inputVolts" | "frequency" | "controlMode" | "dimming" | "outputs" | "fixturesPerOutput" | "totalFixtures", string>>;

const horticultureSpecifications = (values: HorticultureValues = {}): ProductSpecification[] => [
  { label: "AC Input Power", value: values.inputPower || "" },
  { label: "Dimming", value: values.dimming || "" },
  { label: "Lifetime", value: values.lifetime || "" },
  { label: "Efficacy up to", value: values.efficacy || "" },
  { label: "PPF(380-780nm) up to", value: values.photonOutput || "" },
  { label: "AC Input Voltage", value: values.inputVoltage || "" },
  { label: "Warranty", value: values.warranty || "" },
];

const spectrometerSpecifications = (values: SpectrometerValues = {}): ProductSpecification[] => [
  { label: "Wavelength range", value: values.wavelengthRange || "" },
  { label: "Measurement range", value: values.measurementRange || "" },
  { label: "Accuracy", value: values.accuracy || "" },
  { label: "Connectivity", value: values.connectivity || "" },
  { label: "Dimensions", value: values.dimensions || "" },
];

const controllerSpecifications = (values: ControllerValues = {}): ProductSpecification[] => [
  { label: "Input Volts", value: values.inputVolts || "" },
  { label: "Frequency", value: values.frequency || "" },
  { label: "Control Mode", value: values.controlMode || "" },
  { label: "Dimming", value: values.dimming || "" },
  { label: "Outputs", value: values.outputs || "" },
  { label: "Number of Fixtures Per Output", value: values.fixturesPerOutput || "" },
  { label: "Total Number of Fixtures", value: values.totalFixtures || "" },
];

const hpsSpecifications = (values: HpsValues = {}): ProductSpecification[] => [
  { label: "Lamp Number", value: values.lampNumber || "" },
  { label: "Lamp Watts", value: values.lampWatts || "" },
  { label: "Input Volts", value: values.inputVolts || "" },
  { label: "Input Current", value: values.inputCurrent || "" },
  { label: "Input Power", value: values.inputPower || "" },
  { label: "High PPE", value: values.highPpe || "" },
  { label: "Photon flux PPF", value: values.photonFlux || "" },
  { label: "Min Power Factor", value: values.minPowerFactor || "" },
  { label: "THD", value: values.thd || "" },
  { label: "Crest Factor", value: values.crestFactor || "" },
];

const hpsLampSpecifications = (values: HpsLampValues = {}): ProductSpecification[] => [
  { label: "Base Designation", value: values.baseDesignation || "" },
  { label: "Bulb Designation", value: values.bulbDesignation || "" },
  { label: "Bulb Diameter mm", value: values.bulbDiameter || "" },
  { label: "Max Overall Length (MOL) mm", value: values.maxOverallLength || "" },
  { label: "Light Output (Lumens100Hrs)(Lm)", value: values.lightOutput || "" },
  { label: "Lamp Lumens Per Watt(Lm/w)", value: values.lumensPerWatt || "" },
  { label: "Rated Life (Hours@10Hour/Start)(Hr)", value: values.ratedLife || "" },
  { label: "Color Temperature (k)", value: values.colorTemperature || "" },
  { label: "Chromaticity (CIE-x/y)", value: values.chromaticity || "" },
  { label: "Color Rendering Index (CRI)", value: values.cri || "" },
  { label: "Burning Position", value: values.burningPosition || "" },
  { label: "To 90% Warm Up Time (min)", value: values.warmUpTime || "" },
  { label: "Hot Restart Time (min)", value: values.hotRestartTime || "" },
  { label: "Photon Flux PPF(umol/s)", value: values.photonFlux || "" },
];

const powerSupplySpecifications = (values: PowerSupplyValues = {}): ProductSpecification[] => [
  { label: "MAX output power", value: values.maxOutputPower || "" },
  { label: "Output rated voltage", value: values.outputRatedVoltage || "" },
  { label: "Maximum output current", value: values.maximumOutputCurrent || "" },
  { label: "Rated input voltage", value: values.ratedInputVoltage || "" },
  { label: "Input frequency", value: values.inputFrequency || "" },
  { label: "Power factor", value: values.powerFactor || "" },
  { label: "THD", value: values.thd || "" },
  { label: "Communication method", value: values.communicationMethod || "" },
  { label: "Heat dissipation method", value: values.heatDissipationMethod || "" },
  { label: "Max output modes", value: values.maxOutputModes || "" },
  { label: "Fixtures Per Power Supply", value: values.fixturesPerPowerSupply || "" },
];

const x100Specifications = (): ProductSpecification[] => [
  { label: "Calibration Uncertainty", value: "± 5%" },
  { label: "Measurement Range", value: "0 to 999,999 μmol m⁻² s⁻¹; 0 - 200,000 lx (lux)" },
  { label: "Measurement Repeatability", value: "Less than 5 %" },
  { label: "Long - term Drift (Non - stability)", value: "Less than 2 % per year" },
  { label: "Non - linearity", value: "Less than 1 % (up to 6000 μmol m⁻² s⁻¹)" },
  { label: "Spectral Range", value: "350 to 750 nm" },
  { label: "Spectral Resolution", value: "5 nm" },
  { label: "Wavelength repeatability", value: "± 1 nm" },
  { label: "Directional (Cosine) Response", value: "± 5 % at 75° zenith angle" },
  { label: "Tilt Error", value: "Less than 0.5 %" },
  { label: "Temperature Response", value: "Less than 0.15% per °C" },
  { label: "Uncertainty in Daily Total", value: "Less than 5 %" },
  { label: "Accepted light sources", value: "All light sources include Natural,LED,Fluorescent,Incandescent,Gas Vapour,HID" },
  { label: "Housing", value: "Weatherproof anodized aluminum case" },
  { label: "IP Rating", value: "IP67" },
  { label: "Warranty", value: "3 year against defects in materials and workmanship" },
  { label: "Mobile Operating Systems", value: "Android & iOS" },
  { label: "Size", value: "33*28*46(mm)" },
  { label: "Weight", value: "114 g" },
];

const x200Specifications = (): ProductSpecification[] => [
  { label: "Calibration Uncertainty", value: "± 5%" },
  { label: "Measurement Range", value: "0 to 999,999 μmol m⁻² s⁻¹; 0 - 200,000 lx (lux)" },
  { label: "Measurement Repeatability", value: "Less than 5 %" },
  { label: "Long - term Drift (Non - stability)", value: "Less than 2 % per year" },
  { label: "Non - linearity", value: "Less than 1 % (up to 6000 μmol m⁻² s⁻¹)" },
  { label: "Spectral Range", value: "350 to 1050 nm" },
  { label: "Spectral Resolution", value: "1 nm" },
  { label: "Wavelength repeatability", value: "± 1 nm" },
  { label: "Directional (Cosine) Response", value: "± 5 % at 75° zenith angle" },
  { label: "Tilt Error", value: "Less than 0.5 %" },
  { label: "Temperature Response", value: "Less than 0.15% per °C" },
  { label: "Uncertainty in Daily Total", value: "Less than 5 %" },
  { label: "Accepted light sources", value: "All light sources include Natural,LED,Fluorescent,Incandescent,Gas Vapour,HID" },
  { label: "Housing", value: "Weatherproof anodized aluminum case" },
  { label: "IP Rating", value: "IP68" },
  { label: "Warranty", value: "3 year against defects in materials and workmanship" },
  { label: "Mobile Operating Systems", value: "Android & iOS" },
  { label: "Size", value: "25 L*25 W*40 H(mm)" },
  { label: "Weight", value: "94 g" },
];

export const productRows: ProductRecord[] = [
  // Linear indoor LED — 7 products
  { id: "linear-indoor-1", family: "linear-indoor", title: "Photon CL100", model: "", number: "01", isNew: false, image: "/products/Photon CL100.jpg", description: "Full-spectrum light for rooting mother plant cuttings, boosting strike rates and vigor.", application: "1. Built-in driver, ultra-thin design, suitable for multi-tier grow racks. 2. Efficient spectrum, suitable for cloning/cutting seedling growth.", specifications: horticultureSpecifications({ inputPower: "100W", dimming: "0-10V", lifetime: "> 50,000hrs", efficacy: "2.8 µmol/J", photonOutput: "280 µmol/s", inputVoltage: "200-277 VAC", warranty: "5 Years Limited Warranty" }) },
  { id: "linear-indoor-2", family: "linear-indoor", title: "Photon E1000", model: "", number: "02", isNew: false, image: "/products/Photon E1000.jpg", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications({ inputPower: "1000W", dimming: "0-10V", lifetime: "> 50,000hrs", efficacy: "2.8 µmol/J", photonOutput: "2800 µmol/s", inputVoltage: "200-277 VAC", warranty: "5 Years Limited Warranty" }) },
  { id: "linear-indoor-3", family: "linear-indoor", title: "Photon F840", model: "", number: "03", isNew: true, image: "/products/Photon F840.jpg", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications({ inputPower: "840W", dimming: "0-10V", lifetime: "> 50,000hrs", efficacy: "3.15 µmol/J", photonOutput: "2646 µmol/s", inputVoltage: "100-277 VAC", warranty: "5 Years Limited Warranty" }) },
  { id: "linear-indoor-4", family: "linear-indoor", title: "Photon F1000", model: "", number: "04", isNew: false, image: "/products/Photon F1000.jpg", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications({ inputPower: "1000W+30W(FR)", dimming: "0-10V", lifetime: "> 50,000hrs", efficacy: "3.1 µmol/J", photonOutput: "3193 µmol/s", inputVoltage: "200-277 / 120-277 VAC(option)", warranty: "5 Years Limited Warranty" }) },
  { id: "linear-indoor-5", family: "linear-indoor", title: "Photon HPL1000", model: "", number: "05", isNew: true, image: "/products/HPL 1000.jpg", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications({ inputPower: "1000W", dimming: "0-10V", lifetime: "> 50,000hrs", efficacy: "2.9 µmol/J", photonOutput: "2900 µmol/s", inputVoltage: "200-277 / 120-277 VAC(option)", warranty: "5 Years Limited Warranty" }) },
  { id: "linear-indoor-6", family: "linear-indoor", title: "Photon V330", model: "", number: "06", isNew: true, image: "/products/Photon V330.jpg", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications({ inputPower: "330W", dimming: "0-10V", lifetime: "> 50,000hrs", efficacy: "3.1 µmol/J", photonOutput: "1023 µmol/s", inputVoltage: "120-277 VAC", warranty: "5 Years Limited Warranty" }) },
  { id: "linear-indoor-7", family: "linear-indoor", title: "Photon V500", model: "", number: "07", isNew: false, image: "/products/Photon V500.jpg", description: "Explore linear lighting for controlled indoor growing environments.", application: "Indoor cultivation", specifications: horticultureSpecifications({ inputPower: "500W", dimming: "0-10V", lifetime: "> 50,000hrs", efficacy: "3.1 µmol/J", photonOutput: "1550 µmol/s", inputVoltage: "200-277 VAC", warranty: "5 Years Limited Warranty" }) },

  // Under canopy — 2 products
  { id: "under-canopy-1", family: "under-canopy", title: "Photon UC120", model: "", number: "01", isNew: false, image: "/products/Photon UC120.jpg", description: "Explore supplemental lighting positioned beneath the plant canopy.", application: "Supplemental canopy lighting", specifications: horticultureSpecifications({ inputPower: "120W", dimming: "0-10V", lifetime: "> 50,000hrs", efficacy: "3.1 μmol/J", photonOutput: "372 μmol/s", inputVoltage: "120-277 VAC", warranty: "5 Years Limited Warranty" }) },
  { id: "under-canopy-2", family: "under-canopy", title: "Photon UC160", model: "", number: "02", isNew: false, image: "/products/Photon UC160.jpg", description: "Explore supplemental lighting positioned beneath the plant canopy.", application: "Supplemental canopy lighting", specifications: horticultureSpecifications({ inputPower: "160W", dimming: "0-10V", lifetime: "> 50,000hrs", efficacy: "3.1 μmol/J", photonOutput: "496 μmol/s", inputVoltage: "200-277 VAC", warranty: "5 Years Limited Warranty" }) },

  // HPS — 4 products
  { id: "hps-1", family: "hps", title: "Photon PRO277", model: "", number: "01", isNew: false, image: "/products/Photon PRO277.jpg", description: "Explore high-pressure sodium lighting options for horticulture.", application: "Horticultural HPS lighting", specifications: hpsSpecifications({ lampNumber: "1", lampWatts: "1000W", inputVolts: "277V", inputCurrent: "3.70A", inputPower: "1035W", highPpe: "2.34 μmol/J", photonFlux: "2340 μmol/s", minPowerFactor: "0.99", thd: "< 10%", crestFactor: "< 1.7" }) },
  { id: "hps-2", family: "hps", title: "Photon PRO480", model: "", number: "02", isNew: false, image: "/products/Photon PRO480.jpg", description: "Explore high-pressure sodium lighting options for horticulture.", application: "Horticultural HPS lighting", specifications: hpsSpecifications({ lampNumber: "1", lampWatts: "1000W", inputVolts: "480V", inputCurrent: "2.15A", inputPower: "1038W", highPpe: "2.34 μmol/J", photonFlux: "2340 μmol/s", minPowerFactor: "0.99", thd: "< 10%", crestFactor: "< 1.7" }) },
  { id: "hps-3", family: "hps", title: "Photon 1000W PAR", model: "", number: "03", isNew: false, image: "/products/Photon 1000W PAR.jpg", description: "Explore high-pressure sodium lighting options for horticulture.", application: "Horticultural HPS lighting", specifications: hpsLampSpecifications({ baseDesignation: "K12x30s", bulbDesignation: "T10", bulbDiameter: "32 max", maxOverallLength: "394 max", lightOutput: "150000", lumensPerWatt: "150", ratedLife: "10000", colorTemperature: "2000K", chromaticity: "0.522, 0.415", cri: "22", burningPosition: "Horizontal ±15°", warmUpTime: "4", hotRestartTime: "3---5", photonFlux: "2100" }) },
  { id: "hps-4", family: "hps", title: "Photon 1000W PRO", model: "", number: "04", isNew: false, image: "/products/Photon 1000W PRO.jpg", description: "Explore high-pressure sodium lighting options for horticulture.", application: "Horticultural HPS lighting", specifications: hpsLampSpecifications({ baseDesignation: "K12x30s", bulbDesignation: "T10", bulbDiameter: "32 max", maxOverallLength: "394 max", lightOutput: "155000", lumensPerWatt: "155", ratedLife: "10000", colorTemperature: "2000K", chromaticity: "0.522, 0.415", cri: "22", burningPosition: "Horizontal ±15°", warmUpTime: "4", hotRestartTime: "3---5", photonFlux: "2100" }) },

  // One driver — 2 products
  { id: "one-driver-1", family: "one-driver", title: "Photon GH600", model: "", number: "01", isNew: true, image: "/products/Photon GH600.jpg", description: "Explore the single-driver lighting collection.", application: "Single-driver lighting", specifications: horticultureSpecifications({ inputPower: "600W", dimming: "0-10V", lifetime: "> 50,000hrs", efficacy: "3.9 μmol/J", photonOutput: "2340 μmol/s", inputVoltage: "--------", warranty: "5 Years Limited Warranty" }) },
  { id: "one-driver-2", family: "one-driver", title: "Photon Power 32k", model: "", number: "02", isNew: false, image: "/products/Photon Power 32k.jpg", description: "Explore the single-driver lighting collection.", application: "Single-driver lighting", specifications: powerSupplySpecifications({ maxOutputPower: "32KW(160x200W)", outputRatedVoltage: "600-900V", maximumOutputCurrent: "20A each way", ratedInputVoltage: "3-phase 5Line(L1/L2/L3/N/PE) 347-480Vac", inputFrequency: "50Hz/60Hz", powerFactor: "0.99@full load", thd: "<15%", communicationMethod: "0-10V", heatDissipationMethod: "Fan active cooling", maxOutputModes: "2 ways output", fixturesPerPowerSupply: "Fixtures per way output" }) },

  // Greenhouse — 1 product
  { id: "greenhouse-1", family: "greenhouse", title: "Photon GH630", model: "", number: "01", isNew: false, image: "/products/Photon GH630.jpg", description: "Explore supplemental lighting for greenhouse growing environments.", application: "Greenhouse cultivation", specifications: horticultureSpecifications({ inputPower: "600W@277V", dimming: "0-10V", lifetime: "> 50,000hrs", efficacy: "3.0 μmol/J", photonOutput: "1890 μmol/s", inputVoltage: "100-277 VAC", warranty: "5 Years Limited Warranty" }) },

  // Spectrometer — 2 products
  { id: "spectrometer-1", family: "spectrometer", title: "X-100", model: "", number: "01", isNew: false, image: "/products/X-100.jpg", description: "Explore instruments for understanding the light in your growing environment.", application: "Light measurement", specifications: x100Specifications() },
  { id: "spectrometer-2", family: "spectrometer", title: "X-200", model: "", number: "02", isNew: false, image: "/products/X-200.jpg", description: "Explore instruments for understanding the light in your growing environment.", application: "Light measurement", specifications: x200Specifications() },

  // Control system — 1 product
  { id: "control-system-1", family: "control-system", title: "Photon Controller Pro", model: "", number: "01", isNew: false, image: "/products/Photon  Controller Pro.jpg", description: "Explore control solutions for connected horticultural lighting environments.", application: "Lighting control", specifications: controllerSpecifications({ inputVolts: "120-240V/AC -12V/DC", frequency: "50/60 Hz", controlMode: "0-10V", dimming: "0-100 %", outputs: "2 Single channels / Multi-channel", fixturesPerOutput: "50", totalFixtures: "100" }) },
];
