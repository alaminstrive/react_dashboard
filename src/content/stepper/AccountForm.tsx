import { FormWrapper } from "./FormWrapper"
import TextField from '@mui/material/TextField';


type AccountData = {
  email: string
  password: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <TextField
        label="Email"
        size="small"
        autoFocus
        required
        type="email"
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <TextField
        label="Password" 
        size="small"
        required
        type="password"
        value={password}
        onChange={e => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  )
}
