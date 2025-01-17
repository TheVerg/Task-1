import BlogList from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    
    const {data :blog, isPending, error} = useFetch('http://localhost:8000/blogs');

 
    return ( 
        <div className="Home">
            {error && <div>{error} </div>}
            {isPending && <div>Loading......</div>}
           { blog && <BlogList  blogs={blog} title= "All the Blogs"/>}
        </div>
     );
}
 
export default Home;