import Header from "./Components/Header";
import PostCard from "./Components/PostCard";

export default function Post(){
    return (
        <div className="h-screen">
            <Header/>
            {/* <div className="bg-red-500 h-screen overflow-x-scroll"> */}
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            {/* </div> */}
        </div>
    );
}