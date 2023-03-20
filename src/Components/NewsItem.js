import React from 'react'

const NewsItem =(props)=> {
  
    let {title,description,imageUrl,newsUrl,author,date,source} = props ;
    return (
      <div className='container my-3'>
        <div className="card" >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source.name}</span>
  <img src= {imageUrl} className="card-img-top" alt="no-img" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} | updated on {new Date(date).toUTCString()}</small></p>
    <a href={newsUrl}  className="btn btn-sm btn-dark btn-primary">More To Read</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem