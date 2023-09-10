

export type BooksItemType = {
    id: string,
    volumeInfo: {
        title: string,
        authors?: string[],
        description?: string,
        categories: string[],
        imageLinks?: {
            thumbnail?:string,
            small?:string,
            medium?:string,
            large?:string,
        },
    }
}

export type ResponseType = {
    totalItems: number,
    items: BooksItemType[],
}



