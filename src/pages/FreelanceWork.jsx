import React from 'react';
import { bookCovers } from '../data/data';
const FreelanceWork = () => {
  return (
    <section id='freelance-work' className='freelance-work common-section-head'>
      <div className='common-section-head-inner'>
        <h2>Freelance Works</h2>
        <p>Here are some of my cover designs</p>
      </div>
      <div className="freelance-work-img-grid-box">
        <ul className='freelance-work-img-grid'>
            {
                bookCovers.map((items, index) => {
                    return <li key={index} ><a href={items} target='_blank'><img src={items} alt={index} /></a></li>
                })
            }
        </ul>
      </div>
    </section>
  );
};

export default FreelanceWork;
