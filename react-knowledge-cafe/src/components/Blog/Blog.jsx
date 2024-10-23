import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleAddTobookmark}) => {
  const{title, cover,author_img,author,reading_time,posted_date,hashtags} = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover} alt={`Cover picture of the ${title}`} />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
           <div className="ml-6">
            <h2 className="text-2xl">{author}</h2>
            <p>{posted_date}</p>
           </div>
        </div>

        <div>
          <span>{reading_time}min read</span>
          <button 
            onClick={handleAddTobookmark}
            className="ml-2 text-2xl text-red-600"
          ><FaBookmark></FaBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {
          hashtags.map(hash => <span><a href="">#{hashtags}</a></span>)
        }
      </p>
    </div>
  );
};

export default Blog;