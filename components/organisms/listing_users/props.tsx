export type User  ={
    id:number;
    name: string;
    data: number;
    photo: string;
}

export type Click = {
    On_Click: (user: User) => void;
}