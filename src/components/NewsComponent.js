import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsComponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page:1 
      
    };
  }
  async componentDidMount() {
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=2dcb17c007354d32b8a194803ef03c0a&page=1&pageSize=15`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles ,
                   totalResults : parsedata.totalResults });
    console.log(this.state.totalResults)
    console.log(parsedata)
  }
  
 changetoNext =  async()=>{ 

 if(Math.ceil(this.state.totalResults/15)<this.state.page + 1){

 }else{

  let url =
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=2dcb17c007354d32b8a194803ef03c0a&page=${this.state.page +1}&pageSize=15`;
let data = await fetch(url);
let parsedata = await data.json();
this.setState({ articles: parsedata.articles,
  page:this.state.page+1
 });
 }

  
}
     

      
  
changetoPrevious =  async()=>{ 
  let url =
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=2dcb17c007354d32b8a194803ef03c0a&page=${this.state.page -1}&pageSize=15`;
let data = await fetch(url);
let parsedata = await data.json();
this.setState({ articles: parsedata.articles,
  page:this.state.page-1
 });
}

  render() {
    return (
      <div className="container ">
        <div className="d-flex  justify-content-center m4 my-5 " >
        <h1 className="self-align-center ">Pegion news- top heading </h1>
        </div>
      
        <div className="row d-flex  justify-content-around">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0, 70):element.title}
                  // discription={element.discription ?element.description.slice(0, 88): "disciription is missing see full news "}
                  discription={element.discription ? "disciription is missing see full news ":element.description}
                  url={element.url}
                  imgurl={element.urlToImage?element.urlToImage:"https://cdn.pixabay.com/photo/2019/07/30/18/26/surface-4373559_960_720.jpg"}
                />
              </div>
            );
          })}
        </div>
         <div className=" d-flex justify-content-between mb-5">   
            <button disabled={this.state.page<=1}  onClick={this.changetoPrevious} className="btn btn-dark">&laquo; previous </button> 
                    <button  disabled={Math.ceil(this.state.totalResults/15)<this.state.page + 1} onClick={this.changetoNext} className="btn btn-dark">next &raquo; </button>   
          </div>
      </div>
    );
  }
}

export default NewsComponent;
