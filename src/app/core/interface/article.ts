export interface Article {
    data:Result;
    msg:string;
    errorCode:number;
}

export interface Result{
    data:Array<ArticleItem>|object;
    pageSize?:number;
    current?:number;
    total?:number;
}

export interface ArticleItem{
    id: number;
    title: string;
    create_time: string;
    browse_count?: number;
    comment_count?: number;
    content?: string;
    des?: string;
    main_img?: string;
    praise_count?: number;
    tags?: any;
    update_time?: string;
    status?: number;
}