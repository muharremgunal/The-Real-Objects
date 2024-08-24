declare module "react-scrollama" {
  import { ComponentType } from "react";

  export interface StepProps {
    onStepEnter?: (data: any) => void;
    onStepExit?: (data: any) => void;
    data?: any;
    children?: ReactNode;
  }

  export const Scrollama: ComponentType<any>;
  export const Step: ComponentType<StepProps>;
}
