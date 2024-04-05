import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '@/components/Drawer/Drawer';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
import {
  Container,
  ReviewWrapper,
  Header,
  ReviewCount,
  ReviewTitle,
  ReviewNumber,
  WriteReview,
  ReviewContent,
  NoReview,
  NoReviewText,
  TitleContainer,
  Title,
  FormContentContainer,
  AddressInputContainer,
  LocationIcon,
  AddressText,
  ReviewTextAreaContainer,
  ReviewPlaceholder,
  SubmitButtonContainer,
  SubmitButtonText,
  LoadMoreButtonContainer,
  LoadMoreButtonText,
  LoadMoreButtonIconContainer,
  LoadMoreButtonIcon,
} from '@/components/Review/Review.styles';

export default function Review({ address }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(3); // Initial number of visible reviews
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleReview = () => {
    if (reviewText.trim() !== '') {
      setSubmittedReviews([...submittedReviews, reviewText]);
      setReviewText('');
      setIsDrawerOpen(false);
    }
  };

  return (
    <>
      <Container>
        <ReviewWrapper>
          <Header>
            <ReviewCount>
              <ReviewTitle>리뷰</ReviewTitle>
              <ReviewNumber>{submittedReviews.length}개</ReviewNumber>
            </ReviewCount>
            <button
              onClick={() => {
                window.scrollTo({
                  top: 500,
                  behavior: 'smooth',
                });
              }}
            >
              <WriteReview onClick={toggleDrawer}>리뷰 작성</WriteReview>
            </button>
          </Header>
          {submittedReviews.length === 0 ? (
            <ReviewContent>
              <NoReview>
                <NoReviewText>리뷰를 작성해주세요.</NoReviewText>
              </NoReview>
            </ReviewContent>
          ) : (
            <>
              {submittedReviews
                .slice(0, visibleReviews)
                .map((review, index) => (
                  <ReviewCard key={index} comment={review} />
                ))}
              {submittedReviews.length > visibleReviews && (
                <LoadMoreButtonContainer>
                  <LoadMoreButtonText
                    onClick={() => {
                      navigate('/review');
                    }}
                  >
                    더보기
                  </LoadMoreButtonText>
                  <LoadMoreButtonIconContainer>
                    <LoadMoreButtonIcon></LoadMoreButtonIcon>
                  </LoadMoreButtonIconContainer>
                </LoadMoreButtonContainer>
              )}
            </>
          )}
        </ReviewWrapper>
      </Container>
      {isDrawerOpen && (
        <Drawer
          height={46.4}
          isOpened={isDrawerOpen}
          toggleDrawer={toggleDrawer}
        >
          <TitleContainer>
            <Title>리뷰 작성</Title>
          </TitleContainer>
          <FormContentContainer>
            <AddressInputContainer>
              <LocationIcon>
                <div
                  style={{
                    width: '3px',
                    height: '3px',
                    left: '10.50px',
                    top: '7.50px',
                    position: 'absolute',
                    background: '#4F8337',
                  }}
                />
                <div
                  style={{
                    width: '15px',
                    height: '21px',
                    left: '4.50px',
                    top: '1.50px',
                    position: 'absolute',
                    background: '#4F8337',
                  }}
                />
              </LocationIcon>
              <AddressText>{address}</AddressText>
            </AddressInputContainer>
            <ReviewTextAreaContainer>
              <ReviewPlaceholder
                placeholder="리뷰를 남겨주세요! (100자 이내)"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </ReviewTextAreaContainer>
          </FormContentContainer>
          <SubmitButtonContainer>
            <SubmitButtonText onClick={handleReview}>등록하기</SubmitButtonText>
          </SubmitButtonContainer>
        </Drawer>
      )}
    </>
  );
}