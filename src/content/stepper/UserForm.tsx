import { FormWrapper } from "./FormWrapper"
import TextField from '@mui/material/TextField';

type UserData = {
  firstName: string
  lastName: string
  age: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
       <TextField
        label="First Name"
      
       
        size="small"
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
       <TextField
        label="Last Name"
      
       
        size="small"
        required
        type="text"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
       <TextField
        label="Age"
      
       
        size="small"
        required
        type="number"
        value={age}
        onChange={e => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  )
}
