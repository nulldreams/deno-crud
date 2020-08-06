export interface IDeveloper {
  name?: string
  sex?: SexTypes
  age?: number
  hobby?: string
  birthdate?: Date
}

enum SexTypes {
  MALE = 'male',
  FEMALE = 'female',
}
