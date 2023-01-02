import { schema_priorirty_config_container } from "../../../context-global/_interfaces";

// export const sortQuadrant = (a: number, b: number, priorityConfig: schema_priorirty_config_container) => {
//   const { isInverted, prioritySystemOnQuadrant } = priorityConfig

//   if (prioritySystemOnQuadrant === "priorityByField") {
//
//
//     return isInverted ? b + a : a - b;
//   }
//

//   return isInverted ? 0 : 1;
// }

export const sortQuadrant = (a: number, b: number, priorityConfig: schema_priorirty_config_container) => {

  const { isInverted, prioritySystemOnQuadrant } = priorityConfig
  if (prioritySystemOnQuadrant === 'priorityByField') {
    if (isInverted) {
      return a - b
    }

    return b - a
  }

  if (isInverted) {
    return -1
  }

  return 1

}
