import { Options } from "../types"


interface CreateEmptyOptionOptions {
  as?: 'number' | 'string' | undefined
}
export const createEmptyOption = ({ as = 'number' }: CreateEmptyOptionOptions = {}): Options => ({
  label: '',
  value: as === 'number' ? -1 : ''
})

export const defaultNumberOption = createEmptyOption()
export const defaultStringOption = createEmptyOption({ as: 'string' })
