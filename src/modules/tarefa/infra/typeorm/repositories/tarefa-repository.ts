import { DeleteResult, getRepository, Repository } from 'typeorm'
import { Tarefa } from '../entities/tarefa'
import { ITarefaDTO, ITarefaSelectDTO } from '@modules/tarefa/dtos/i-tarefa-dto'
import { ITarefaRepository } from '@modules/tarefa/repositories/i-tarefa-repository'
import { noContent, serverError, notFound } from '@shared/helpers'

class TarefaRepository implements ITarefaRepository {
  private repository: Repository<Tarefa>

  constructor() {
    this.repository = getRepository(Tarefa)
  }


  // create
  async create({
    name,
    description,
    status
  }: ITarefaDTO): Promise<Tarefa> {
    try {
      const tarefa = this.repository.create({
        name,
        description,
        status
      })

      await this.repository.save(tarefa)

      return tarefa
    } catch (err) {
      throw serverError(err)
    }
  }


  // list
  async list(
    search: string,
    page: number,
    rowsPerPage: number,
    columnOrder: Array<'ASC' | 'DESC'>
  ): Promise<Tarefa[]> {
    try {
      if (typeof columnOrder === 'undefined' || columnOrder.length === 0) {
        columnOrder = ['ASC', 'ASC']; // Default sorting
      }

      const offset = rowsPerPage * page;

      // Execute the query to get raw data from the database
      let tarefas = await this.repository.createQueryBuilder('com')
        .select([
          'com.id as "id"',
          'com.name as "name"',
          'com.description as "description"',
          'com.status as "status"' // Alias
        ])
        .andWhere('CAST(com.name AS VARCHAR) ilike :search', { search: `%${search}%` })
        .orWhere('CAST(com.description AS VARCHAR) ilike :search', { search: `%${search}%` })
        .addOrderBy('com.name', columnOrder[0])
        .addOrderBy('com.description', columnOrder[1])
        .offset(offset)
        .limit(rowsPerPage)
        .take(rowsPerPage)
        .getRawMany();

      tarefas = tarefas.map(tarefa => ({
        ...tarefa,
        status: tarefa.status === 'true' || tarefa.status === true || tarefa.status === 1
      }));

      return tarefas;
    } catch (err) {
      throw serverError(err); // Handle any errors
    }
  }


  // select
  async select(): Promise<ITarefaSelectDTO[]> {
    try {
      const tarefas = await this.repository.createQueryBuilder('com')
        .select([
          'com.id',
          'com.name',
        ])
        .addOrderBy('com.name')
        .getMany()

      return tarefas
    } catch (err) {
      throw serverError(err)
    }
  }


  // count
  async count(search: string): Promise<{ count: number }> {
    try {
      const tarefas = await this.repository.createQueryBuilder('com')
        .select([
          'com.id as "id"',
        ])
        .andWhere('com.name ilike :search', { search: `%${search}%` })
        .orWhere('com.description ilike :search', { search: `%${search}%` })
        .getRawMany()

      return { count: tarefas.length }
    } catch (err) {
      throw serverError(err)
    }
  }


  // get
  async get(id: string): Promise<Tarefa> {
    try {
      const tarefa = await this.repository.findOne(id)

      if (!tarefa) {
        throw noContent()
      }

      return tarefa
    } catch (err) {
      throw serverError(err)
    }
  }


  // update
  async update({
    id,
    name,
    description,
    status
  }: ITarefaDTO): Promise<Tarefa> {
    const tarefa = await this.repository.findOne(id)

    if (!tarefa) {
      throw notFound()
    }

    const newTarefa = this.repository.create({
      id,
      name,
      description,
      status
    })

    try {
      await this.repository.save(newTarefa)

      return newTarefa
    } catch (err) {
      throw serverError(err)
    }
  }


  // delete
  async delete(id: string): Promise<void> {
    let tarefa: DeleteResult

    try {
      tarefa = await this.repository.delete(id)
    } catch (err) {
      throw serverError(err)
    }

    if (!tarefa.affected) {
      throw notFound()
    }
  }
}

export { TarefaRepository }
