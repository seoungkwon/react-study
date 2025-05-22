import './NewsBlog.css';
import { useState } from 'react';

function NewsBlog() {   
    
    let title = "React study";

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
                //                 ['Today News', '어제의 뉴스', '내일의 뉴스']

    let [likeCount1, setLikeCount1] = useState(0);
    let [likeCount2, setLikeCount2] = useState(0);
    let [likeCount3, setLikeCount3] = useState(0);

    let [likeCounArr, setLikeCountArr] = useState( [0, 0, 0] );

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={ {color:"orange", fontSize:'20px'} }>{title}</p>
            </div>

            <div className='post-list'>
                {/* <h4>{news1}</h4> */}
                <h4>{news[0]} <span onClick={()=>{

                    // setLikeCount1(likeCount1+1);
                    let temp = [...likeCounArr];
                    temp[0] += 1;
                    setLikeCountArr(temp);

                }}>💋</span>{likeCounArr[0]}</h4>
                <p>내용 무</p>

                
                {/* <button onClick={()=>{
                    //setNews1('Today News');
                    //['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스'] -> ['Today News', '어제의 뉴스', '내일의 뉴스']
                    
                    //news[0] = 'Today News';
                    let temp = [...news];
                    temp[0] = 'Today News';
                    setNews(temp);
                }}>제목 변경</button> */}
            </div>

            <div className='post-list'>
                {/* <h4>{news1}</h4> */}
                <h4>{news[1]} <span onClick={()=>{

                    // setLikeCount2(likeCount2+1);
                    let temp = [...likeCounArr];
                    temp[1] += 1;
                    setLikeCountArr(temp);

                }}>💋</span>{likeCounArr[1]}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                {/* <h4>{news1}</h4> */}
                <h4>{news[2]} <span onClick={()=>{

                    //setLikeCount3(likeCount3+1);
                    let temp = [...likeCounArr];
                    temp[2] += 1;
                    setLikeCountArr(temp);

                }}>💋</span>{likeCounArr[2]}</h4>
                <p>내용 무</p>
            </div>
            
        </div>    
    );
}

export default NewsBlog;