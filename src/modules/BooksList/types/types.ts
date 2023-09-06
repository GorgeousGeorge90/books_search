

export type ResponseItemInfo = {
    kind:string,
    id:string,
    etag:string,
    selfLink:string,
    volumeInfo: {
        title:string,
        subtitle?:string,
        authors?:string[],
        publisher?:string,
        publishedDate?:string,
        description?:string,
        categories?:string[],
        readingModes: {
            text:boolean,
            image:boolean,
        },
        maturityRating:string,
        allowAnonLogging:boolean,
        contentVersion:string,
        panelizationSummary: {
            containsEpubBubbles:boolean,
            containsImageBubbles:boolean,
        },
        imageLinks: {
            smallThumbnail:string,
            thumbnail:string,
        },
        previewLink:string,
        infoLink:string,
        canonicalVolumeLink:string,
    },
    saleInfo: {
        country:string,
    },
    accessInfo: {
        country:string,
        epub: {
            isAvailable:boolean,
        },
        pdf: {
            isAvailable:boolean,
            acsTokenLink:string,
        },
        accessViewStatus:string,
    },
    searchInfo: {
        textSnippet:string,
    }
}


export type ResponseType = {
    kind: string,
    totalItems: number,
    items: BooksItemType[],
}

export type BooksItemType = {
    id:string,
    title:string,
    authors?:string[],
    description?:string,
    imageLinks: {
        smallThumbnail:string,
        thumbnail:string,
    },
    categories?:string[],
}

