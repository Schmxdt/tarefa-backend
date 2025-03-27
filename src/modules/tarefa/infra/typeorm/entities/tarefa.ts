import { PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'


@Entity('tarefas')
class Tarefa {
  @PrimaryColumn()
  id?: string

  @Column({ name: 'name', nullable: true })
  name?: string

  @Column({ name: 'description', nullable: true })
  description?: string

  @Column({ name: 'status', nullable: true, default: false, type: 'boolean' })
  status?: boolean

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Tarefa }
