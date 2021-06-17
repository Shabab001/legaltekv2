import React from 'react'
import ReactStars from "react-rating-stars-component";
const LawfirmListReviews = () => {
    return (
        <div className="user-profile tab b-reviews">
        <h1 style={{paddingTop:".5rem"}}>Reviews</h1>
  
        {/* <ul className="sort-list">
          Sort By:{" "}
          <li>
            <strong>
              <Select
                defaultValue="date"
                style={{ width: 120 }}
                onChange={handleChange}
                // dropdownMatchSelectWidth={false}
              >
                <Option value="date">Date</Option>
                <Option value="name">Name</Option>
              </Select>
            </strong>
          </li>
          <li>
            <Select
              defaultValue="all"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="all">All Locations</Option>
              <Option value="nearest">Nearest</Option>
            </Select>
          </li>
          <li>
            <Select
              defaultValue="all"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="all">All Categories</Option>
              <Option value="thai">Thai</Option>
              <Option value="chinese">Chinese</Option>
            </Select>
          </li>
        </ul>
        <div className="divider"></div> */}
  
        {/* <div className="review-card">
          <div className="rev-first">
            <div className="img-container">
              <img src={require("../../../assets/img/japanesefood.jpeg")} />
            </div>
            <div className="detail-container">
              <h5>Vietnoms</h5>
              <h6>$$ - Vietnamese</h6>
              <p>243 Shephard Avenue E Toronto, 0N M2N 3A8 Canada</p>
            </div>
          </div>
          <div className="main-review">
            <div>
              <div className="ratingDate">
            
                <ReactStars style={{justifyContent:'center !important'}} value ={2.403} edit={false} count={5} size={15} activeColor="#e50077" />{" "}
                <span>09/12/20</span>
              </div>
  
              <p>
                This is the best Pho restaurant within 10km to my home. This is my
                go to place whenever i have a cold and need to have some chicken
                soup. I hope they make more money and move to a bigger location
                with better seating arrangements.
              </p>
              <p className="review-menulinks">
                <Foodmenu /> <span>Menu</span>
              </p>
              <div className="usefullactions">
              <span className="usefullCount"><i className="fa fa-lightbulb-o "/>Useful (2)</span>
              <div className="actions">
                <span><i className="fas fa-external-link-alt"/></span>
                <span><i className="fa fa-refresh"/></span>
                <span><i className="fa fa-trash"/></span>
              </div>
              </div>
            
            </div>
          </div>
        </div> */}
        
  
  
  
  
  
        <div className="table">
          <table>
            <thead>
              <tr className="tableHeader">
                <th>Lawyer</th>
                <th>Reviewer</th>
                <th>Review</th>
                <th>Status</th>
                <th>Action</th>
                {/* https://source.unsplash.com/people/300 */}
              </tr>
            </thead>
            <tbody>
              <tr className="breakrow">
                <td >
                  <div>
                  <div className="img-container">
                  <img src="https://source.unsplash.com/random/10" />
                    </div>
                  <div className="img-info">
                    <p>Anchor Oyster Bar <span>$</span></p>
                    <span>Seafood, +3</span>
                  </div>
             
                 
                  </div>
                
                </td>
                <td> <div>
                <div className="img-container">
                  <img src="https://source.unsplash.com/random/10" />
                    </div>
                  <div className="img-info">
                    <p>Jonathan Nolan <span>$</span></p>
                    <span>Austin, Texas</span>
                  </div>
             
                 
                  </div></td>
                <td><div className='reviewCol'><div><ReactStars style={{justifyContent:'center !important'}} value ={2.403} edit={false} count={5} size={15} activeColor="#e50077" />
                <span>13/6/2019 8:23 PM</span>
                </div>
                <h5>Highly Recommended Coffee</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                
                </div></td>
                <td>5</td>
                <td><div className="three-dots"><span></span></div></td>
              </tr>
              <tr className="breakrow">
                <td >
                  <div>
                  <div className="img-container">
                  <img src="https://source.unsplash.com/random/10" />
                    </div>
                  <div className="img-info">
                    <p>Anchor Oyster Bar <span>$</span></p>
                    <span>Seafood, +3</span>
                  </div>
             
                 
                  </div>
                
                </td>
                <td> <div>
                <div className="img-container">
                  <img src="https://source.unsplash.com/random/10" />
                    </div>
                  <div className="img-info">
                    <p>Jonathan Nolan <span>$</span></p>
                    <span>Austin, Texas</span>
                  </div>
             
                 
                  </div></td>
                <td><div className='reviewCol'><div><ReactStars style={{justifyContent:'center !important'}} value ={2.403} edit={false} count={5} size={15} activeColor="#e50077" />
                <span>13/6/2019 8:23 PM</span>
                </div>
                <h5>Highly Recommended Coffee</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                
                </div></td>
                <td>5</td>
                <td><div className="three-dots"><span></span></div></td>
              </tr>
              <tr className="">
                <td >
                  <div>
                    <div className="img-container">
                  <img src="https://source.unsplash.com/random/10" />
                    </div>
                  <div className="img-info">
                    <p>Anchor Oyster Bar <span>$</span></p>
                    <span>Seafood, +3</span>
                  </div>
             
                 
                  </div>
                
                </td>
                <td> <div>
                <div className="img-container">
                  <img src="https://source.unsplash.com/random/10" />
                    </div>
                  <div className="img-info">
                    <p>Jonathan Nolan <span>$</span></p>
                    <span>Austin, Texas</span>
                  </div>
             
                 
                  </div></td>
                <td><div className='reviewCol'><div><ReactStars style={{justifyContent:'center !important'}} value ={2.403} edit={false} count={5} size={15} activeColor="#e50077" />
                <span>13/6/2019 8:23 PM</span>
                </div>
                <h5>Highly Recommended Coffee</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                
                </div></td>
                <td>5</td>
                <td><div className="three-dots"><span></span></div></td>
              </tr>
       
     
            </tbody>
          </table>
        </div>
  
  
  
  
        
      </div>
    )
}

export default LawfirmListReviews
