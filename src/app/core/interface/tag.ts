export interface Tag {
    data:Result;
    msg:string;
    errorCode:number;
}

export interface Result{
    data:Array<TagItem>;
    pageSize?:number;
    current?:number;
    total?:number;
}

export interface TagItem{
    id: number;
    name: string;
    des: string;
    color:string;
    bg_color:string;
    create_time?: string;
    update_time?: string;
}