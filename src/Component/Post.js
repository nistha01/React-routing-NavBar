import React from "react";
import {Link} from 'react-router-dom';

const Post = () =>{
    return(
        <div class="panel panel-success">
      <div class="panel-heading">Post</div>
      <div class="panel-body">Post to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
    
      <h2>JavaScript</h2>
      <Link to="/post/javascript" className="btn btn-success">Details</Link>
      <h2>ReactJs</h2>
      <Link to="/post/react" className="btn btn-warning">Details</Link>
      <h2>NodeJs</h2>
      <Link to="/post/node" className="btn btn-danger">Details</Link>
      </div>
    </div>
       
    )
}
export default Post;