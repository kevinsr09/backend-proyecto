import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'encuestas' })
export class Encuesta extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    a: string

  @Column()
    b: number

  @Column()
    c: string

  @Column()
    d: string

  @Column()
    e: string

  @Column()
    f: string

  @Column()
    g: string
}
