import React from 'react';
import 'antd/dist/antd.css';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { List, Avatar } from 'antd';

const ListComponent = ({ Title, Poster, Year, Type, imdbID, ...rest }) => {
  return (
    <List
      className="list-movies"
      {...rest}
      itemLayout="horizontal">
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar className="movie-avatar" src={Poster} />}
          title={
            <Link to={`/detail/${imdbID}`}>{Title}</Link>
          }
          description={`
            Year: ${Year} ||
            Type: ${Type} ||
            imdbId: ${imdbID}
          `}
        />
      </List.Item>
    </List>
  )
}

export default ListComponent;