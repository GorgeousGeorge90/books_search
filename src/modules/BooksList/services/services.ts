import axios from 'axios';
import { OptionsType } from "../../../context/OptionSearchWrapper";




class BooksApiServices {
    private baseURL = 'https://www.googleapis.com/books/v1/volumes?';
    private params = 'maxResults=30&key=AIzaSyBR0GunejdY8otK34lgCjRgwFhApDpjMk4'
    private fields = 'fields=totalItems,items(id,volumeInfo.title,volumeInfo.authors,volumeInfo.description,volumeInfo.categories,volumeInfo.imageLinks)'

    async fetchBooks({title,startIndex,category,order}:OptionsType) {
            if (category === 'all') {
                return await axios.get(`${this.baseURL}q=${title}&orderBy=${order}&startIndex=${startIndex}&${this.fields}&${this.params}`)
            } else {
                return await axios.get(`${this.baseURL}q=${title}+subject:${category}&${this.fields}&orderBy=${order}&startIndex=${startIndex}&${this.params}`)
            }
        }
}

export default new BooksApiServices()