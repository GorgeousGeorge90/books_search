import React from 'react';
import styles from './App.module.scss';
import Header from './componets/Header/Header';
import BookList from './modules/BooksList/BookList';

function App() {

    return (
        <div className={styles.app_wrapper}>
            <Header/>
            <main className={styles.app_main}>
                <BookList/>
            </main>
     </div>
  );
}

export default App;
