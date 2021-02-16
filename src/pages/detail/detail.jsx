import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axiosRequestGet from "../../shared/services/axios-request-get.api"
import { apikey } from "../../shared/constants/global.constant";
import { addDetails } from "../../store/actions"
import "./detail.css"

const Detail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const detail = useSelector(state => state.detail.detail)
  const {
    Poster,
    Title,
    Type,
    Year,
    Actors,
    Director,
    Genre,
    Plot
  } = detail

  useEffect(() => {
    fetchDetail()
  })

  const fetchDetail = async () => {
    const movieDetail = await axiosRequestGet(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}&plot=full`)
    dispatch(addDetails(movieDetail))
  }

  return (
    <div className="detail">
      <div className="container">
        <div className="content-poster">
          <img src={Poster} alt={Title} style={{ width: '100%' }} />
        </div>
        <div className="content-details">
          <h1>{Title}</h1>
          <h3><strong>Type:</strong> {Type}</h3>
          <h3><strong>Year:</strong> {Year}</h3>
          <h3><strong>Actors:</strong> {Actors}</h3>
          <h3><strong>Director:</strong> {Director}</h3>
          <h3><strong>Genre:</strong> {Genre}</h3>
          <h3><strong>Plot:</strong> {Plot}</h3>
          <p><Link to='/'><button>Back to search</button></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Detail