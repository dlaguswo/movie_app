import React from 'react'; //  { Component } -> 컴포넌트가 필요없을 때는 없어도 됨
import PropTypes from 'prop-types'; // prop-types import
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

/* 
class Movie extends Component { // 어떤 오브젝트 (props)가 있으면, 괄호를 한번 치고 this.props.title를 쓰면 됨
    static propTypes = { // 부모 컴포넌트에게서 받은 정보의 종류가 무엇인지 체크가능(자료형 체크 가능)
        title : PropTypes.string.isRequired, // isRequired로 작성을 하면 title이라는 prop를 제공하는 것이 필수요건으로 지정해서 만약 데이터가 없을 경우 메시지를 받을 수 있음
        poster : PropTypes.string.isRequired
    }
    render(){
        return(
            <div>
                <MoviePoster poster = {this.props.poster}/>
                <h1>{this.props.title}</h1>  
            </div>
        );
    }
}*/

/*
class MoviePoster extends Component {

    static propTypes = { // movie poster라는 부모 컴포넌트에게서 받는 정보를 체크
        poster : PropTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} alt = "Movie Poster" />
        );
    }
}
*/

function Movie({title, poster, genres, synopsis}){ // functional 컴포넌트에서 this.props를 삭제해줘야 함 클래스가 아니기 때문
    return( // html class == JSK clssName
            // 각각 <div> 의미 순서대로 : 칼럼-무비포스터 제작, 제목 만들기, 장르 array 맵핑 
            // 맵핑할 때 MovieGenres 새로운 컴포넌트를 만듬(funcional 컴포넌트))
        <div className= "Movie"> 
            <div className = "Movie__Columns"> 
                <MoviePoster poster={poster} alt={title}/>              
            </div>
            <div className = "Movie__Columns">
                <h1>{title}</h1>
                <div className = "Movie__Genres">
                    {genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}                    
                </div>
                <div className = "Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div> 
        </div>
    );
}

// LinesEllipsis는 긴 텍스트를 받아서(text : long text), maxLine : 최대 라인 값, ellipsis : 최대값 다음을 표현
function MoviePoster({poster, alt}){ 
    return(
        <img src={poster} alt = {alt} title = {alt} className = "Movie__Poster" />
    );
}

function MovieGenres({genre}){
    return (
      <span className = "Movie__Genre">{genre}</span>  
    );
}
Movie.propTypes = { // Movie props 체크
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.string.isRequired,
    synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

MovieGenres.propTypes = {
    genre : PropTypes.string.isRequired
}
export default Movie; // app.js로 해당 컴포넌트를 내보냄