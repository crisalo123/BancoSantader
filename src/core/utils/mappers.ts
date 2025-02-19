
import { Option, OptionRoles, SelectOptions } from '../types/common'


export const mapServiceOptions = (option: SelectOptions): Option => ({
  label: option.name || option.description || option.fullName,
  value: option.id
})


export const mapServiceOptionsRoles = (option: SelectOptions): OptionRoles => ({
  label: option.name || option.description || option.fullName,
  value: option.id,
  premissions: option.premissions as any
})
