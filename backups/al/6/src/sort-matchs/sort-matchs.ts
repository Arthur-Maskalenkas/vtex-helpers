import { schema_site_editor_remapped_custom_quadrant } from "_interfaces"
import { T_schema_priority } from "_interfaces/_schema-types"

export class SortMatchs {
  private resolvePriorityByList (isInverted: boolean): number {
    if (isInverted) return -1

    return 1
  }

  private resolvePriorityByField (a: number, b: number, isInverted: boolean): number {
    if (isInverted) return a - b

    return b - a
  }

  public sort (a: number, b: number, isInverted: boolean, prioritySystemOnQuadrant: T_schema_priority): number {
    let result = 0

    prioritySystemOnQuadrant === 'priorityByField'
      ? result =
      this.resolvePriorityByField(a, b, isInverted)
      : result =
      this.resolvePriorityByList(isInverted)

    return result
  }
}