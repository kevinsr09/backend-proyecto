import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'panaderia_pref' })
export class PanaderiaPref extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    description: string

  @Column()
    count: number
}
