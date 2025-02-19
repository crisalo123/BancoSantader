import type { premissions } from '../components/ui/Form/SelectField';

export interface SelectOptions {
  id: number
  isActive?: boolean
  description?: string
  name?: string
  fullName?: string
  standardName?: string
  premissions?: premissions[]
}

export interface Option {
  label?: string
  value: string | number | string[] | boolean | number[]
}

export interface premissions {
  id: number
  isActive: boolean
  moduleId: number
  name: string
  property: string
  parentModuleId: number
}
export interface OptionRoles {
  label?: string
  value: string | number | string[] | boolean | number[]
  premissions: premissions[]
}