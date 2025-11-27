export class Task {
    id: number;
    nombre : string;
    descripcion : string;
    prioridad : string undefined;
    fechaDecreacion : string | undefined;
    fechaDeExpiracion : string | undefined;
}
export class Task{

}
export enum prioridad{
    baja,
    media,
    alda
}
export enum estado{
    completada,
    enProgreso,
    pendiente
}