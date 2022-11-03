import React from "react";
import styled from "styled-components";
import photos from "../data/photos";

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const DialogBlock = styled.div`
  padding: 0px;
  width: 1200px;
  height: 600px;
  background: white;
  border-radius: 20px;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr 4fr 1fr;

  grid-template-areas:
    "newPost"
    "title"
    "addImg"
    "description"
    "buttonArea";

  .newPost {
    grid-area: newPost;
    border-bottom: solid #eee 2px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .titleArea {
    grid-area: title;
    border-bottom: solid #eee 2px;
    padding: 2%;
  }
  .addImg {
    grid-area: addImg;
    border-bottom: solid #eee 2px;
    padding: 2%;
  }
  .description {
    grid-area: description;
    padding: 2%;
  }
  .buttonArea {
    grid-area: buttonArea;
  }
`;

const TitleInput = styled.input`
  border: 0px;
  width: 100%;
  height: 100%;
`;

const SelectIconImg = styled.img`
  width: 40px;
  margin: 0px;
  padding: 10px;
  padding-right: 38%;
`;

const H2 = styled.h2`
  padding-right: 40%;
`;

const DescriptionInput = styled.input`
  border: 0px;
  width: 100%;
  height: 100%;
`;

const ImgInput = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 60%;
  color: #999999;
  border-radius: 5px;
`;

const SelectLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: rgba(0, 53, 109, 0.95);
  cursor: pointer;
  height: 20px;
  margin-left: 10px;
  border-radius: 5px;
`;

// input(file) 숨기기
const UploadInput = styled.input`
  position: absolute;
  with: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const PostButton = styled.button`
  display: inline-flex;
  color: white;
  font-weight: bold;
  outline: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: rgba(0, 53, 109, 0.95);

  height: 2.7rem;
  margin-left: 45%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.6rem;
  font-size: 1rem;
`;

function Write({ write, setWrite }) {
  return (
    <>
      <Background>
        <DialogBlock>
          <div className="newPost">
            <SelectIconImg
              src="icon/chevron_left.svg"
              onClick={() => {
                setWrite(false);
              }}
            />
            <H2>새 게시물 등록하기</H2>
            {/* <SelectIconImg src="icon/close.svg" /> */}
          </div>
          <div className="titleArea">
            <TitleInput type="text" placeholder="제목" />
          </div>
          <div className="addImg">
            <ImgInput
              type="text" // 파일명 보여줌
              value="이미지를 업로드 하세요"
              placeholder="이미지를 업로드 하세요"
              disabled // input(text) 태그 수정 불가
            />
            <SelectLabel for="upload-file">파일선택</SelectLabel>
            <UploadInput type="file" id="upload-file" />
            {/* File 필드 사용 */}
          </div>
          <div className="description">
            <DescriptionInput type="text" placeholder="내용을 입력해주세요." />
          </div>
          <div className="buttonArea">
            <PostButton>등록하기</PostButton>
          </div>
        </DialogBlock>
      </Background>
    </>
  );
}

export default Write;
