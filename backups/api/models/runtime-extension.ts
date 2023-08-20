export type RuntimeExtensionModel = {
  before: any[];
  around: any[];
  after: any[];
  blockId: string;
  blocks: any[];
  component: string;
  composition: string;
  hasContentSchema: boolean;
  hydration: string;
  implements: string[];
  preview: null | any;
  props: Record<string, any>
  render: string;
  track: any[];
  content: Record<string, any>
  contentIds: string[];
}
