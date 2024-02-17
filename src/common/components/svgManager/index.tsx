/**
 *
 * SvgManager
 *
 */

import { Icons } from "@assets/index";
import { ISvgManagerProps } from "./types";

function SvgManager({
  iconName,
  svgProp,
  testID,
}: ISvgManagerProps): JSX.Element {
  const Icon = Icons[iconName];

  if (!Icon) {
    return <></>;
  }

  return <Icon {...svgProp} data-testid={testID} />;
}

export default SvgManager;
