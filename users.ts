import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column("varchar", { length: 30 })
  name: string

  @Column()
  age: number

  @Column()
  gender: string

  @Column()
  status: boolean

  @Column()
  creation_timestamp: string

  @Column()
  modification_timestamp: string
}
