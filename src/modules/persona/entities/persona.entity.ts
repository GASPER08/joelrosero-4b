import { 
  PrimaryGeneratedColumn, 
  Column, 
  Entity, 
  JoinColumn, 
  OneToOne 
} from "typeorm";

import { User } from "../../users/entities/user.entity";

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @OneToOne(() => User, user => user.persona)
  @JoinColumn()
  user: User;
}
