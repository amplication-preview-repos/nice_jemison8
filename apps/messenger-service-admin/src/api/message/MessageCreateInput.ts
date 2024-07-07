import { InputJsonValue } from "../../types";

export type MessageCreateInput = {
  content?: InputJsonValue;
  receiver?: string | null;
  sender?: string | null;
};
