import { JsonValue } from "type-fest";

export type Message = {
  content: JsonValue;
  createdAt: Date;
  id: string;
  receiver: string | null;
  sender: string | null;
  updatedAt: Date;
};
