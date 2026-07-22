export type ReferenceTool = {
  slug: string;
  icon: string;
  titleKey: string;
  descKey: string;
  external?: string;
};

export const referenceTools: ReferenceTool[] = [
  {
    slug: "water",
    icon: "💧",
    titleKey: "waterTitle",
    descKey: "waterDesc",
  },
   {
    slug: "food",
    icon: "💧",
    titleKey: "waterTitle",
    descKey: "waterDesc",
  },
];

export const externalCalcUrl = "https://calc-water-props.vercel.app/";
