import './Detail.css';

import { useParams } from 'react-router';
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from 'react';

//function Detail(props){
function Detail({ foods }) {

    let { id } = useParams();

    let [orderCount, setOrderCount ] = useState(0);

    let[showModal, setShowModal] = useState(true);

    //  foods 전체 정보 보유

    //  id  : 현재 페이지에서 표시해야하는 food의 id가 확인됨

    // foods에 들어있는 id 값 == 주소 params 에 들어있는 id 값
    let food = foods.find((food)=>{
        return food.id == id;
    })

    //foods.findIndex
    //if(food == -1){}

//  console.log(food);


    // LifeCycle (생성mount, 수정update, 삭제unmount)
    // useEffect(실행할 함수, 의존성 배열)
    // useEffect(실행할 함수{ return ()=>{clean up function} }, 의존성 배열)

    useEffect(()=>{     //의존성 배열x -> 매번 랜더링시 실행 (로딩생성mount, 수정update)
        console.log('useEffect')
    })

    useEffect(()=>{     //의존성 빈 배열o -> 로딩생성(mount)
        console.log('useEffect, []')
    }, [])

    useEffect(()=>{     //의존성 배열 -> 로딩생성mount, 배열내에 변수가 변경될때(수정update)
        console.log('useEffect, [orderCount]')
        console.log(orderCount);

        return ()=>{ console.log('useEffect, [orderCount] 에 들어있는 return 함수 실행')}

    }, [orderCount])

    /*
    useEffect(()=>{
        let cnt = 0;
        let intv = setInterval(()=>{
            console.log(cnt++);
        }, 1000)

        return ()=>{
            clearInterval(intv);
        }
    })
    */

    //modal 창 가리기
    useEffect(()=>{

        setTimeout(()=>{
            setShowModal(false);
        }, 2000);

    }, [])

    if(food == undefined){ //잘못된 id값이 들어옴. 해당 id 상품 없음

        return (
            <div><h1>존재하지 않는 상품입니다. 잘못된 접근입니다.</h1></div>
        )
    }

    

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>
                    <p>
                        <Button variant="dark" onClick={()=>{
                            if(orderCount > 0)
                            setOrderCount(orderCount -1);
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={()=>{
                            setOrderCount(orderCount +1);
                        }}>+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>

            {
                //showModal &&
                //showModal == true ? :
            }

        <Modal show={showModal} onHide={()=>{ setShowModal(false) }}>
            <Modal.Header closeButton>
                <Modal.Title>환영합니다~</Modal.Title>
            </Modal.Header>
            <Modal.Body>어서오세요~ Food 구경하세요~</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={()=>{ setShowModal(false) }}>
                확인
            </Button>
            </Modal.Footer>
        </Modal>


        </Container>
    );
}

export default Detail;