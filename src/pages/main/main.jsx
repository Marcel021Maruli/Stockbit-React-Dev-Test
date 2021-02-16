import React, { memo } from 'react';
import { Search } from '../../shared/components/inputs/search'
import { List } from "../../shared/components/list"
import useMain from './services/main.hooks'
import './main.css'
import { Modal } from "../../shared/components/modals"

const Main = memo(() => {
  const {
    handleOnChange,
    handleScroll,
    handleClick,
    movies,
  } = useMain()

  return (
    <div className="Main">
      <div className="page-title">
        <h1>IMDB Movie Search</h1>
      </div>
      <div onChange={handleOnChange} className="search-input">
        <Search />
      </div>
      {
        movies.length > 0 ?
          <div className="result-search" onScroll={handleScroll}>
            <ul>
              {
                movies ? movies.map(movie => {
                  return (
                    <div key={movie.imdbID}>
                      <List {...movie} onClick={handleClick} />
                    </div>
                  )
                }) : null
              }
            </ul>
          </div>
          :
          null
      }
      <Modal />
    </div>
  )
})

export default Main