import { conocimiento } from "./conocimiento";

export interface asignatura{
    nombre:string,
    profesor: string,
    conocimientos: conocimiento[],
    ciclo: string,
    curso: number,
}