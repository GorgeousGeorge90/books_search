import axios from 'axios';

class BooksApiServices {
    private baseURL = 'https://www.googleapis.com/books/v1/volumes';
    private key = 'AIzaSyBR0GunejdY8otK34lgCjRgwFhApDpjMk4'

    async fetchBooks(title:string) {
        return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=30&projection=lite&key=AIzaSyBR0GunejdY8otK34lgCjRgwFhApDpjMk4`)
    }

}

export default new BooksApiServices()