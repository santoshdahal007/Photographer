import React from 'react';
import Select from 'react-select'
import { couples_engagement } from '../assets/couples';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const portfolio_options=[
  { value: 'Back to School', label: 'Back to School' },
  { value: 'Holiday Sessions', label: 'Holiday Sessions' },
  { value: 'Couples/Engagement', label: 'Couples/Engagement' },
  { value: 'Weddings', label: 'Weddings' },
  { value: 'Maternity', label: 'Maternity' },
  { value: 'Newborn', label: 'Newborn' },
  { value: 'Family', label: 'Family' },
  { value: 'Cake Smash', label: 'Cake Smash' },
  { value: 'Kids', label: 'Kids' },
  { value: 'Senior', label: 'Senior' },
  { value: 'Potrait', label: 'Potrait' },
  { value: 'Misc', label: 'Misc' }
]

const Portfolio = () => {
  const test_pos=[];
  let count = 0
  const test = (rectValue,index,el)=>{
    if(count === 4){
      count = 0;
    }
    if(!test_pos[count]){
      test_pos[count] =[rectValue.bottom,index];
      count += 1;
    }
    else if(test_pos[count]?.[1] !== index){
      const posDiff = rectValue.top - test_pos[count][0];
      if(posDiff > 16){
        const new_pos = posDiff - 16;
        el.style.top = `-${new_pos}px`;
        test_pos[count] = [(rectValue.bottom - new_pos),index]
      }else{
        test_pos[count] = [rectValue.bottom,index];
      }
      count += 1;
    }
  }

  return( 
    <section 
      className='top-[120px] lg:top-[140px] absolute 
      w-full px-[30px] lg:px-[100px] section'>
      <div>
        <Select className='block xl:hidden' options={portfolio_options} />
        <ul className='hidden xl:flex flex-col 
          lg:flex-row grow shrink gap-x-4'>
          {
            portfolio_options.map((val)=>{
              return <li className='h-auto'>
                  <p className='text-md text_color'>{val.label}</p>
                </li>
            })
          }
        </ul>
      </div>
      <div className="App overflow-scroll h-3/4">
        <div className='h-[98%]'>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames='grid grid-cols-4 gap-4'>
            {
              couples_engagement.map((img,index)=>{
                return (
                  <a href={img}>
                    <img 
                      ref={el=>{
                        if(!el) return;
                        test(el.getBoundingClientRect(),index,el);
                      }}
                      alt="img1" 
                      src={img} 
                      style={{position:'relative'}}
                      width="400px"/>
                  </a>
                )
              })
            }
          </LightGallery>
        </div>
      </div>
    </section>
  )
};

export default Portfolio;