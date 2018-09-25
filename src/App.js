import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'; // 해당 컴포넌트를 import Movie해줌

class App extends Component { // 메인 컴포넌트(app)

    /* componentDidMount(){
        setTimeout(() => {
          this.setState({              
            movies : [
                {
                    title : "Matrix",
                    poster : ""
                },
                {
                    title : "Full Metal Jacket",
                    poster : ""
                },
                {
                    title : "Oldboy",
                    poster : ""
                },
                {
                    title : "Star Wars",
                    poster : ""
                },
                {
                    title : "Trainspotting",
                    poster : ""
                }           
             ]
          })
        }, 5000)
    }*/
    state = {}
 
    componentDidMount(){ // component가 mount되면, 해당 url에 가서 fetch함(가져옴), fetch가 url을 ajax로 불러옴
        this._getMovies();  
    }

    _renderMovies = () => { // 데이터가 없을 때 로딩을 띄우고, 있으면 영화정보가 보이도록 하는 함수
      const movies = this.state.movies.map(movie => { // movie는 현 사이클의 현재 엘리먼트, index는 현재 엘리먼트 리스트의 숫자                 
        // movies는 영화 타이틀, 포스터 순으로 맵핑을 함, key 값에다가 느린 index 대신에 영화의 id값 사용
        // props : title(제목), poster(포스터), genres(장르), synopsis(요약) 추가
            return <Movie 
            title = {movie.title_english}  
            poster = {movie.medium_cover_image} 
            key={movie.id} 
            genres={movie.genres}
            synopsis = {movie.synopsis}
            />
        })
        return movies
    }

    _getMovies = async () => {
        const movies = await this._callApi(); /* await는 callApi()의 기능이 끝나기를 기다린 후 
         callApi()의 return 값을 movies에 저장 */
        this.setState({ // callApi()의 기능이 끝난 후에 실행 
            movies
        })
       
    }

    _callApi = () =>  { // => 자체에 return 기능 내장
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count') 
        .then(potato => potato.json()) // response로 체크하고 json으로 변환
        .then(json => json.data.movies) 
        .catch(err => console.log(err));  
    }
    render() {
        const {movies} = this.state; // this.state.movies와 같은 표현
        return ( 
        <div className = { movies ? "App" : "App--loading"} >  
           {movies ? this._renderMovies() : 'Loading'} 
        </div>
        );
        // {this.state.movies ? this._renderMovies() : 'Loading'} : state안에 movies가 있으면 _renderMovies 호출
    }
}
// did mount -> get movies
export default App;