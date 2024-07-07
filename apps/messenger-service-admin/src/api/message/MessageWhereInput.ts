import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MessageWhereInput = {
  content?: JsonFilter;
  id?: StringFilter;
  receiver?: StringNullableFilter;
  sender?: StringNullableFilter;
};
