import { ComponentProps } from 'react'
import { TextInputContainer, Prefix, Input } from './styles'

export const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}
export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}
