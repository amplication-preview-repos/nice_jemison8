import { InputJsonValue } from "../../types";

export type MessageUpdateInput = {
  content?: InputJsonValue;
  receiver?: string | null;
  sender?: string | null;
};
