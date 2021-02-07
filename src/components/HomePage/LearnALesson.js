import React from 'react'
import japaneseFood from "../../assets/img/japanesefood.jpeg";

function LearnALesson() {
    return (
        <div className="cookingLesson">
        <div className="cont">
          <div>
            <h1>Find your next cooking lesson</h1>
          </div>

          <div className="lessonCardRow">
            <div className=" lessonCard">
              <div className="lessonImage">
                <img src={japaneseFood} alt="lesson"/>
              </div>
              <div className="lessonInfo">
                <h5>Japanese Food</h5>
                <p>
                  <strong>$35</strong> per day
                </p>
              </div>
            </div>
            <div className="lessonCard">
              <div className="lessonImage">
                <img src={japaneseFood} alt="lesson"/>
              </div>
              <div className="lessonInfo">
                {" "}
                <h5>Vietnamese Food</h5>
                <p>
                  <strong>$35</strong> per day
                </p>
              </div>
            </div>
            <div className=" lessonCard">
              <div className="lessonImage">
                <img src={japaneseFood} alt="lesson"/>
              </div>
              <div className="lessonInfo">
                <h5>Bangladeshi Food</h5>
                <p>
                  <strong>$35</strong> per day
                </p>
              </div>
            </div>
            <div className=" lessonCard">
              <div className="lessonImage">
                <img src={japaneseFood} alt="lesson"/>
              </div>
              <div className="lessonInfo">
                <h5>Chinese Food</h5>
                <p>
                  <strong>$35</strong> per day
                </p>
              </div>
            </div>
            <div className=" lessonCard">
              <div className="lessonImage">
                <img src={japaneseFood} alt="lesson"/>
              </div>
              <div className="lessonInfo">
                <h5>Korean Food</h5>
                <p>
                  <strong>$35</strong> per day
                </p>
              </div>
            </div>
            <div className=" lessonCard">
              <div className="lessonImage">
                <img src={japaneseFood} alt="lesson"/>
              </div>
              <div className="lessonInfo">
                <h5>Malaysian Food</h5>
                <p>
                  <strong>$35</strong> per day
                </p>
              </div>
            </div>
            <div className=" lessonCard">
              <div className="lessonImage">
                <img src={japaneseFood} alt="lesson"/>
              </div>
              <div className="lessonInfo">
                <h5>Mexican Food</h5>
                <p>
                  <strong>$35</strong> per day
                </p>
              </div>
            </div>
            <div className=" lessonCard">
              <div className="lessonImage">
                <img src={japaneseFood} alt="lesson"/>
              </div>
              <div className="lessonInfo">
                <h5>Japanese Food</h5>
                <p>
                  <strong>$35</strong> per day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LearnALesson
