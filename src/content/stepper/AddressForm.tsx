import { FormWrapper } from "./FormWrapper"
import TextField from '@mui/material/TextField';


type Address = {
  street: string
  city: string
  state: string
  zip: string
}


type AddressData = {
  street: string
  city: string
  state: string
  zip: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
       <TextField
        label="Street"
      
       
        size="small"
        autoFocus
        required
        type="text"
        value={street}
        onChange={e => updateFields({ street: e.target.value })}
      />
      <label>City</label>
       <TextField
        label="City"
      
       
        size="small"
        required
        type="text"
        value={city}
        onChange={e => updateFields({ city: e.target.value })}
      />
      <label>State</label>
       <TextField
        label="State"
      
       
        size="small"
        required
        type="text"
        value={state}
        onChange={e => updateFields({ state: e.target.value })}
      />
      <label>Zip</label>
       <TextField
        label="Zip"
      
       
        size="small"
        required
        type="text"
        value={zip}
        onChange={e => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  )
}
