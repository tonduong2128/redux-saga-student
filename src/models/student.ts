export interface Student{
    id?:string,
    name:string,
    age:number,
    mark: number,
    gender:"male"|"female",
    citi: string,

    createdAt?:number,
    updatedAt?:number,
}