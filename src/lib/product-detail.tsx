import styled from 'styled-components';

const StyledProductDetail = styled.div`
  color: red;
`;

export function ProductDetail() {
  return (
    <StyledProductDetail>
      <h1>Welcome to Product Detail!</h1>
    </StyledProductDetail>
  );
}

export default ProductDetail;
