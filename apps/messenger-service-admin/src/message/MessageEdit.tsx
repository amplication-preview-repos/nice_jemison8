import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="receiver" source="receiver" />
        <TextInput label="sender" source="sender" />
      </SimpleForm>
    </Edit>
  );
};
