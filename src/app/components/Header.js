import React from 'react';

const ulStyle = {
  listStyle: 'none',
  fontFamily: 'sans-serif',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  backgroundColor: '#d3d3d3'
};

const liStyle = {
  fontFamily: 'sans-serif',
  fontSize: '20px',
  lineHeight: '30px',
  height: '40px',
  textDecoration: 'none',
  color: '#fff',
  display: 'block'
};

const aStyle = {
  textDecoration: 'none',
  color: '#fff',
  display: 'block',
  transition: '.3s backgroundColor'
};

export default class Header extends React.Component {
    render() {
        return (
            <div className="navbar">
                <ul className="ul" style={ ulStyle }>
                    <li className="btn" style={ liStyle }><a href="">Hjem</a></li>
                    <li className="btn" style={ liStyle }><a href="">Om meg</a></li>
                    <li className="btn" style={ liStyle }><a href="">Prosjekter</a></li>
                    <li className="btn" style={ liStyle }><a href="">Kontakt</a></li>
                </ul>
            </div>
        );
    };
}
