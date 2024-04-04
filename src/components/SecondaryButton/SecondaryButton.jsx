import React from 'react';
import { SecondaryBtn, SecondaryBtnTitle } from './SecondaryButton.styles';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function SecondaryButton(props) {
  const renderIcon = (title) => {
    switch (title) {
      case '리스트뷰':
        return (
          <MenuOutlinedIcon
            sx={{ color: '#FFFFFF', width: '24px', height: '24px' }}
          />
        );
      case '지도뷰':
        return (
          <MapOutlinedIcon
            sx={{ color: '#FFFFFF', width: '24px', height: '24px' }}
          />
        );
      case '현재 위치로 검색':
        return (
          <RefreshOutlinedIcon
            sx={{ color: '#FFFFFF', width: '24px', height: '24px' }}
          />
        );
      case '리뷰 작성하기':
        return (
          <ArticleOutlinedIcon
            sx={{ color: '#FFFFFF', width: '24px', height: '24px' }}
          />
        );
    }
  };
  return (
    <SecondaryBtn>
      {renderIcon(props.title)}
      <SecondaryBtnTitle>{props.title}</SecondaryBtnTitle>
    </SecondaryBtn>
  );
}

export default SecondaryButton;
