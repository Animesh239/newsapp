import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  

  

  const updateNews = async()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0662d38c8ed448c4967aa13fd0db5fc5&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults( parsedData.totalResults);
   
  }

  useEffect(() => { 
     updateNews();
   }, );

  // const handlePrevClick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };

   const fetchMoreData = async () => {
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0662d38c8ed448c4967aa13fd0db5fc5&page=${page+1}&pageSize=${props.pageSize}`;
     setPage(page + 1);
    
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);

  };

  
    return (
      <>
        <h2 className="text-center my-3">
          <b>GET-NEWZ</b>- Top Headlines
        </h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData()}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {
                // !(loading) &&
                articles.map((element) => {
                  return (
                    <div className="col-md-4 " key={element.url}>
                      <NewsItem
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container my-3 d-flex justify-content-between">
          <button
            type="button"
            disabled={page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </button>
          <div className="btn-group me-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-dark btn-outline-light">
              1
            </button>
            <button type="button" className="btn btn-dark btn-outline-light">
              2
            </button>
            <button type="button" className="btn btn-dark btn-outline-light">
              3
            </button>
            <button type="button" className="btn btn-dark  btn-outline-light">
              4
            </button>
          </div>
          <button
            type="button"
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            className="btn  btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

 News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
