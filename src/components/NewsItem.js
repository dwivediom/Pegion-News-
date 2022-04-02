import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let{title , discription,imgurl,url}=this.props;
        return (
            <div className='col-md-3 m-3 self-align-center '>
                <div className="card" style={{width: "18rem"}}>
                    <img style={{height:"170px"}} className="card-img-top" src={imgurl} alt="Card  cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{discription}</p>
                            <a href={url}  target="_blank"  rel="noreferrer"  className="btn btn-primary">Full News </a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem