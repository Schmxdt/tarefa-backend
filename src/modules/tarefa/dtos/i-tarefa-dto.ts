interface ITarefaDTO {
  id?: string
  name?: string
  description?: string
  status?: boolean
  createdAt?: Date
  updatedAt?: Date
}

interface ITarefaSelectDTO {
  id?: string
  name?: string
}

export { ITarefaDTO, ITarefaSelectDTO }
