import { useState, useEffect } from 'react';
import axiosRequestGet from "../../../shared/services/axios-request-get.api"
import { apikey } from "../../../shared/constants/global.constant";
import { visibilityModal, addPoster } from "../../../store/actions"
import { useDispatch } from "react-redux"

const useMain = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("")

  const handleOnChange = e => {
    const cekTitle = e ? e.target.value : ""
    setTitle(cekTitle && cekTitle)
  }

  const handleRequest = async title => {
    if (title) {
      const reqMovieList = await axiosRequestGet(`http://www.omdbapi.com/?apikey=${apikey}&s=${title}&page=${page}`)
      const movieList = reqMovieList.Search
      if (movieList) {
        const addMovies = movies.concat(movieList)
        setMovies(addMovies)
      } else {
        setMovies([])
      }
    }
  }

  const handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - clientHeight <= scrollTop) {
      setPage(page + 1)
    }
  }

  const handleClick = async e => {
    if (e.target.src) {
      const poster = e.target.src
      dispatch(visibilityModal(true))
      dispatch(addPoster(poster))
    }
  }

  useEffect(() => {
    handleRequest(title)
  }, [page, title])

  return {
    handleOnChange,
    handleScroll,
    handleClick,
    movies,
  };
};

export default useMain;