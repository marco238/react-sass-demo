import React from "react";
import "./Albums.css";
import logo from '../../logo.svg';

const albums = [
  {
    id: 1,
    title: "Quidem molestiae enim",
    author: 'Peter Bathrooms',
    image: ''
  },
  {
    id: 2,
    title: "Sunt qui excepturi placeat culpa",
    author: 'Miguel Bathrooms',
    image: ''
  },
  {
    id: 3,
    title: "Omnis laborum odio",
    author: 'Great Hair',
    image: ''
  },
  {
    id: 4,
    title: "Non esse culpa molestiae omnis sed optio",
    author: 'Charles of the Tower',
    image: ''
  },
  {
    id: 5,
    title: "Eaque aut omnis a",
    author: 'Óscar Bleeder',
    image: ''
  },
  {
    id: 6,
    title: "Natus impedit quibusdam illo est",
    author: 'Carol ToTheOnso',
    image: ''
  },
];

export default function Albums() {
  return (
    <div id="albums">
      {albums.map(album => (
        <div className="card" key={album.id}>
          <div>
            <h3>{album.title}</h3>
            <p>By: {album.author}</p>
          </div>
          <img src={logo} alt="" />
        </div>
      ))}
    </div>
  );
}
