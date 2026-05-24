import {
  siApple,
  siAutocad,
  siAutodesk,
  siAutodeskrevit,
  siIntel,
  siLinux,
  siNvidia,
  siSketchup
} from "simple-icons";

export type SoftwareCategory = "os" | "adobe" | "architecture" | "render" | "office" | "engineering" | "utility";

export type SoftwareItem = {
  id: string;
  name: string;
  category: SoftwareCategory;
  label: string;
  color: string;
  icon?: { path: string; title: string; hex?: string };
  custom?: "windows" | "office" | "adobe-tile" | "text";
  relatedServices: string[];
};

export const softwareItems = [
  { id: "windows", name: "Windows", category: "os", label: "Win", color: "#00A4EF", custom: "windows", relatedServices: ["windows-qurasdirilmasi"] },
  { id: "linux", name: "Linux", category: "os", label: "Linux", color: `#${siLinux.hex}`, icon: siLinux, relatedServices: ["linux-qurasdirilmasi"] },
  { id: "macos", name: "macOS", category: "os", label: "macOS", color: `#${siApple.hex}`, icon: siApple, relatedServices: ["windows-qurasdirilmasi", "adobe-qurasdirilmasi"] },
  { id: "office", name: "Microsoft Office", category: "office", label: "Office", color: "#D83B01", custom: "office", relatedServices: ["office-qurasdirilmasi"] },
  { id: "photoshop", name: "Photoshop", category: "adobe", label: "Ps", color: "#31A8FF", custom: "adobe-tile", relatedServices: ["adobe-qurasdirilmasi"] },
  { id: "illustrator", name: "Illustrator", category: "adobe", label: "Ai", color: "#FF9A00", custom: "adobe-tile", relatedServices: ["adobe-qurasdirilmasi"] },
  { id: "premiere", name: "Premiere Pro", category: "adobe", label: "Pr", color: "#9999FF", custom: "adobe-tile", relatedServices: ["adobe-qurasdirilmasi"] },
  { id: "after-effects", name: "After Effects", category: "adobe", label: "Ae", color: "#9999FF", custom: "adobe-tile", relatedServices: ["adobe-qurasdirilmasi"] },
  { id: "lightroom", name: "Lightroom", category: "adobe", label: "Lr", color: "#31A8FF", custom: "adobe-tile", relatedServices: ["adobe-qurasdirilmasi"] },
  { id: "autocad", name: "AutoCAD", category: "architecture", label: "CAD", color: `#${siAutocad.hex}`, icon: siAutocad, relatedServices: ["autocad-qurasdirilmasi", "arxitektura-proqramlari"] },
  { id: "revit", name: "Revit", category: "architecture", label: "Revit", color: `#${siAutodeskrevit.hex}`, icon: siAutodeskrevit, relatedServices: ["revit-qurasdirilmasi", "arxitektura-proqramlari"] },
  { id: "3ds-max", name: "3ds Max", category: "architecture", label: "3ds", color: `#${siAutodesk.hex}`, icon: siAutodesk, relatedServices: ["arxitektura-proqramlari"] },
  { id: "sketchup", name: "SketchUp", category: "architecture", label: "SketchUp", color: `#${siSketchup.hex}`, icon: siSketchup, relatedServices: ["arxitektura-proqramlari"] },
  { id: "solidworks", name: "SolidWorks", category: "engineering", label: "SW", color: "#E2231A", custom: "text", relatedServices: ["arxitektura-proqramlari"] },
  { id: "matlab", name: "MATLAB", category: "engineering", label: "MAT", color: "#E16737", custom: "text", relatedServices: ["arxitektura-proqramlari"] },
  { id: "d5-render", name: "D5 Render", category: "render", label: "D5", color: "#00E5FF", custom: "text", relatedServices: ["arxitektura-proqramlari"] },
  { id: "lumion", name: "Lumion", category: "render", label: "Lumion", color: "#16A3FF", custom: "text", relatedServices: ["arxitektura-proqramlari"] },
  { id: "enscape", name: "Enscape", category: "render", label: "Enscape", color: "#F15A24", custom: "text", relatedServices: ["arxitektura-proqramlari"] },
  { id: "vray", name: "V-Ray", category: "render", label: "V-Ray", color: "#27A9E1", custom: "text", relatedServices: ["arxitektura-proqramlari"] },
  { id: "nvidia", name: "NVIDIA", category: "utility", label: "GPU", color: `#${siNvidia.hex}`, icon: siNvidia, relatedServices: ["driver-qurasdirilmasi", "komputer-optimallasdirma"] },
  { id: "intel", name: "Intel", category: "utility", label: "CPU", color: `#${siIntel.hex}`, icon: siIntel, relatedServices: ["driver-qurasdirilmasi", "komputer-optimallasdirma"] }
] satisfies SoftwareItem[];

export type SoftwareId = (typeof softwareItems)[number]["id"];

export const softwareById = Object.fromEntries(softwareItems.map((item) => [item.id, item])) as Record<SoftwareId, SoftwareItem>;

export const serviceSoftware: Record<string, SoftwareId[]> = {
  "windows-qurasdirilmasi": ["windows", "office", "nvidia", "intel"],
  "linux-qurasdirilmasi": ["linux", "windows", "macos"],
  "autocad-qurasdirilmasi": ["autocad", "revit", "3ds-max", "sketchup"],
  "revit-qurasdirilmasi": ["revit", "autocad", "3ds-max", "sketchup"],
  "adobe-qurasdirilmasi": ["photoshop", "illustrator", "premiere", "after-effects", "lightroom"],
  "office-qurasdirilmasi": ["office"],
  "driver-qurasdirilmasi": ["nvidia", "intel", "windows"],
  "komputer-optimallasdirma": ["windows", "nvidia", "intel"],
  "uzagdan-destek": ["windows", "office", "autocad", "photoshop"],
  "arxitektura-proqramlari": ["autocad", "revit", "3ds-max", "sketchup", "solidworks", "matlab", "d5-render", "lumion", "enscape", "vray"],
  "proqram-qurasdirilmasi": ["windows", "office", "autocad", "photoshop"],
  "proqram-yazilmasi": ["windows", "office", "autocad", "photoshop"],
  "komputer-formati": ["windows", "office", "nvidia", "intel"],
  "noutbuk-formati": ["windows", "office", "nvidia", "intel"],
  "office-proqramlari": ["office", "windows"],
  "adobe-proqramlari": ["photoshop", "illustrator", "premiere", "after-effects", "lightroom"],
  "3ds-max-qurasdirilmasi": ["3ds-max", "vray", "autocad", "revit"],
  "solidworks-qurasdirilmasi": ["solidworks", "nvidia", "intel"],
  "archicad-qurasdirilmasi": ["autocad", "revit", "sketchup"],
  "lumion-vray-enscape": ["lumion", "vray", "enscape", "d5-render"],
  "antivirus-qurasdirilmasi": ["windows"],
  "oyun-qurasdirilmasi": ["windows", "nvidia", "intel"],
  "komputer-texniki-destek": ["windows", "office", "autocad"],
  "uzaqdan-texniki-destek": ["windows", "office", "autocad", "photoshop"],
  "komputer-optimizasiya": ["windows", "nvidia", "intel"],
  "formatdan-sonra-proqramlar": ["windows", "office", "nvidia", "intel"]
};

export const packageSoftware: Record<string, SoftwareId[]> = {
  office: ["office", "windows"],
  adobe: ["photoshop", "illustrator", "premiere", "after-effects", "lightroom"],
  architecture: ["autocad", "revit", "3ds-max", "sketchup", "d5-render", "lumion", "enscape", "vray"],
  full: ["windows", "linux", "office", "nvidia", "intel"],
  remote: ["windows", "office", "autocad", "photoshop"]
};

export function getSoftwareItems(ids: SoftwareId[]) {
  return ids.map((id) => softwareById[id]).filter(Boolean);
}
