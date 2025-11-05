import { 
    Persona 
} from "../../persona/entities/persona.entity";
import { 
    Column, 
    Entity, 
    JoinColumn, 
    OneToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ unique: true, length: 255 })
    email: string;

    @Column({ length: 255 })
    password: string;

    @OneToOne(() => Persona, persona => persona.user, { 
        cascade: true,
        onDelete: 'CASCADE' // Opcional: para eliminar en cascada
    })
    @JoinColumn() // Esto indica que User es el lado propietario de la relación
    persona: Persona;
}