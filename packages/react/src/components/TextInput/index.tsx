import { ComponentProps } from 'react'
import { TextInputContainer, Prefix, Input } from './styles'

export const TextInput = ({ prefix, css, ...props }: TextInputProps) => {
  return (
    <TextInputContainer css={css}>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}
export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

TextInput.displayName = 'TextInput'
