import React, { useEffect, useState } from "react";
import "./mapstyle.css";

export default function KakaoMap() {
  //스크립트 파일 읽어오기
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    //카카오맵 스크립트 읽어오기
    const my_script = new_script(
      `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.REACT_APP_KAKAO_KEY}`
    );

    //스크립트 읽기 완료 후 카카오맵 설정
    my_script.then(() => {
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.57192703257688, 126.98473238051166), //좌표설정
          level: 2,
        };
        const map = new kakao.maps.Map(mapContainer, options); //맵생성
        //마커설정
        const markerPosition = new kakao.maps.LatLng(
          37.57192703257688,
          126.98473238051166
        );
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    });
  }, []);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <div id="map" className="map" />
      {/* <div className="box">
            <div className="acourse" onClick={ toggleModal }>A코스</div>
          </div>
          {modal && (
                <div className="modal">
                <div className="modal_wrap">
                    <div className="modal_desc">
                        <ul>
                            <li>A코스</li>
                            <li>B코스</li>
                            <li>C코스</li>
                            <li>D코스</li>
                        </ul>
                    </div>
                <button onClick={ toggleModal }>닫기</button>
                </div>
            </div>
            )} */}
    </div>
  );
}
