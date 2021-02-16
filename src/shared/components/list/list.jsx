import React from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import { List, Avatar } from 'antd';

const ListComponent = ({ Title, Poster, Year, Type, imdbID, ...rest }) => {
  return (
    <List
      {...rest}
      itemLayout="horizontal">
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={Poster} />}
          title={<Link to={`/detail/${imdbID}`}>{Title}</Link>}
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