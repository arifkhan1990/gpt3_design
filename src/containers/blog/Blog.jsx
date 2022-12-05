import React from 'react'
import { Article } from '../../components';
import './blog.css';
import {blog01, blog02, blog03, blog04, blog05} from './imports';
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2022" title="GPT-3 and Open AI is the feature. Let Us explore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 26, 2022" title="Future is GPT-3 AI, How?"/>
          <Article imgUrl={blog03} date="Sep 27, 2022" title="AI Master class build your future."/>
          <Article imgUrl={blog04} date="Sep 27, 2022" title="First job in Open AI at GPT-3."/>
          <Article imgUrl={blog05} date="Sep 29, 2022" title="Midea covarage in GPT-3."/>
        </div>
      </div>
    </div>
  )
}

export default Blog