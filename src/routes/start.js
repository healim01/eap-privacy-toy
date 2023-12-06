import { useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding: 50px 15px;
  border-radius: 12px;
`;

const Input = styled.input`
  margin: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  /* font-weight: bold; */
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  /* margin: 10px; */
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #c54245;
  color: white;
  cursor: pointer;
`;

const Context = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  margin-bottom: 10px;
`;

export default function Start() {
  const [studentNumber, setStudentNumber] = useState("");
  const [consent, setConsent] = useState(false);
  const [isModalOpen, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      alert("개인정보 처리 동의가 필요합니다.");
      return;
    }
    // 개인정보 동의 데이터 처리 로직
    console.log(studentNumber);
  };

  return (
    <>
      <Container>
        <Text>🎄 MERRY CHRISTMAS 🎄 </Text>
        <div style={{ padding: "30px" }} />
        <Form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <CheckboxContainer>
              <Label htmlFor="studentNumber" style={{ fontWeight: "bold" }}>
                Name
              </Label>
              <Input
                type="text"
                id="studentNumber"
                value={studentNumber}
                onChange={(e) => setStudentNumber(e.target.value)}
              />
            </CheckboxContainer>
            <CheckboxContainer>
              <Input
                type="checkbox"
                id="privacyConsent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ color: "red", backgroundColor: "red" }}
              />
              <Label
                htmlFor="privacyConsent"
                style={{ color: "#d9d9d9", borderBottom: "1px solid #d9d9d9" }}
                onClick={() => setOpen(true)}
              >
                I agree to the processing of my personal data.
              </Label>
            </CheckboxContainer>
          </div>
          {consent ? (
            <Link
              to={{
                pathname: "/home",
                state: { studentNumber: studentNumber },
              }}
            >
              <Button type="button">Submit</Button>
            </Link>
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </Form>
        <div style={{ padding: "30px" }} />
        <div style={{ padding: "30px" }} />
      </Container>

      <Modal
        centered
        open={isModalOpen}
        footer={false}
        onCancel={() => setOpen(false)}
        width={300}
        height={300}
        style={{ overflowY: "scroll", borderRadius: "12px" }}
      >
        <Context>
          1. Personal Information Collected: Name Contact Information (Phone
          number, email address, etc.) Address Your last night's dinner menu
          Bank account balance Your secret crush [Other information collected]
          2. Purpose of Collection and Use of Personal Information: Fulfillment
          of service provision contract and billing for services rendered Member
          management Your company's amusement [Other purposes] 3. Retention and
          Use Period of Personal Information: I agree to the retention and use
          of my personal information for the duration of the service provision.
          I agree to have lunch with the professor today. I agree to participate
          in this year's EAP Christmas party and understand that a fine of 1
          million won will be imposed if I fail to attend. [Specific retention
          and use period, e.g., 6 months after the end of the service contract]
          I fully understand the above content and voluntarily agree to the
          collection and use of my personal information.
        </Context>
        <Context>
          1. 수집하는 개인정보의 항목: 이름 연락처 (전화번호, 이메일 주소 등)
          주소 당신의 어제의 저녁 메뉴 통장 잔고 당신의 짝사랑 상대 [기타
          수집하는 정보의 항목] 2. 개인정보의 수집 및 이용 목적: 서비스 제공에
          관한 계약 이행 및 서비스 제공에 따른 요금정산 회원 관리 귀사의 재미
          [기타 목적] 3. 개인정보의 보유 및 이용 기간: 본인은 본인의 개인정보를
          서비스 제공 기간 동안 보유 및 이용하는 것에 동의합니다. 본인은 오늘
          점심을 교수님과 함께 먹는 걸 동의합니다. 본인은 이번 EAP 크리스마스
          파티에 참석할 것을 동의하며, 참여하지 못할 시 벌금 100만원을 지불하는
          것을 동의합니다. [특정한 보유 및 이용 기간, 예: 서비스 이용 계약 종료
          후 6개월] 본인은 위 내용을 충분히 이해하였으며, 개인정보의 수집 및
          이용에 자발적으로 동의합니다.
        </Context>
      </Modal>
    </>
  );
}
