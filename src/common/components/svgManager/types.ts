import { IconType } from "@types";

type ISvgManagerProps = {
  iconName: IconType;
  svgProp?: React.SVGProps<SVGSVGElement>;
  testID?: string;
};

export type { ISvgManagerProps };
