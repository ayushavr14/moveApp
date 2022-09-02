import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../SingleContent/SingleContent";
import "./Trending.css"
import CustomPagination from "../../../Pagination/CustomPagination";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=345b376e46d0897656a68c45988cf0d6&page=${page}`
    );

    // console.log(data);
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <>
      <span className="pageTitle">trending</span>
      <div className="trending">
        {content && content.map((c) =>( 
          <SingleContent
          key = {c.id}
          id = {c.id}
          poster = {c.poster_path}
          title = {c.title || c.name}
          date = {c.first_air_date || c.first_relase_date}
          media_type = {c.media_type}
          vote_average = {c.vote_average}
         />
         ))}
      </div>
         <CustomPagination setPage={setPage}/>
    </>
  );
};

export default Trending;
