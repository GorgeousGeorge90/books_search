import { BooksItemType, ResponseItemInfo } from '../types/types';


class BooksLocalService {
    toLocalType(array:ResponseItemInfo[]) {
        return array.reduce((acc,item)=> {
            let new_item = {
                id:item.id,
                title:item.volumeInfo.title,
                authors:item.volumeInfo.authors,
                description:item.volumeInfo.description,
                imageLinks:item.volumeInfo.imageLinks,
                categories:item.volumeInfo.categories,
            }
            acc.push(new_item)

            return acc
        },[] as BooksItemType[])
    }
}

export default new BooksLocalService()