import axios from 'axios';
import { RequestType } from '../types/types';




class BooksApiServices {
    private baseURL = 'https://www.googleapis.com/books/v1/volumes?';
    private params = 'maxResults=30&projection=lite&key=AIzaSyBR0GunejdY8otK34lgCjRgwFhApDpjMk4'
    private fields = 'fields=totalItems,items(id,volumeInfo/title,volumeInfo/authors,volumeInfo/description,volumeInfo/imageLinks,volumeInfo/categories)'

    async fetchBooks(title:string,startIndex:number) {
            return await axios.get(`${this.baseURL}q=${title}&${this.fields}&startIndex=${startIndex}&${this.params}`)
        }
}

export default new BooksApiServices()