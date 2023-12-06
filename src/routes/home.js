import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import lottie from "lottie-web";

const Container = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 80%;
  height: 80%;
`;

export default function Home() {
  const location = useLocation();
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current, // 애니메이션을 로드할 컨테이너
      renderer: "svg", // 렌더링 방식 설정(svg/canvas/html 중 선택)
      loop: true, // 반복 재생 여부
      autoplay: true, // 자동 재생 여부
      path: "https://lottie.host/ae0a77dd-915f-422a-ae24-13b5017bb47b/7s2mvhH0qJ.json", // 애니메이션 파일 경로
    });
  }, []);

  return (
    <>
      <Container>
        Welcome, {location.state.studentNumber} !
        <div ref={animationContainer} />
      </Container>
    </>
  );
}
