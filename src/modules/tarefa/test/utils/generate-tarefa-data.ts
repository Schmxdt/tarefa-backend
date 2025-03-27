import { faker } from '@faker-js/faker'

export function generateNewTarefaData(overide = {}) {
  return {
    name: faker.datatype.string(100),
    description: faker.datatype.string(100),
    isInactive: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overide
  }
}

export function generateTarefaData(overide = {}) {
  return {
    id: faker.datatype.uuid(),
    name: faker.datatype.string(100),
    description: faker.datatype.string(100),
    isInactive: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overide
  }
}

export function generateTarefasData(n: number = 1, overide = {}) {
  return Array.from(
    {
      length: n,
    },
    (_, i) => {
      return generateTarefaData(overide)
    }
  )
}
