import axios from 'axios';

class BooksServices {
    private baseURL = 'https://www.googleapis.com/books/v1/volumes';
    private key = 'AIzaSyBR0GunejdY8otK34lgCjRgwFhApDpjMk4'

    async fetchBooks(param:string) {
        return await axios.get(`${this.baseURL}?q=${param}&${this.key}`)
    }

}

export default new BooksServices()