import styled from "@emotion/styled";

const borderRadius = "5px";
const sidePadding = "1rem";
const topPadding = ".5rem";
const bottomPadding = ".4rem";
const boxShadow = "0 1px 2px rgba(0, 0, 0, .5)";

const padding = `padding: ${topPadding} 2rem ${bottomPadding} ${sidePadding};`;

const getArrow = isOpen => {
  return isOpen
    ? `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='284.929' height='284.929'%3E%3Cdefs/%3E%3Cpath fill='gray' d='M282.082 195.285L149.028 62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665.953-6.567 2.856L2.856 195.285C.95 197.191 0 199.378 0 201.853c0 2.474.953 4.664 2.856 6.566l14.272 14.271c1.903 1.903 4.093 2.854 6.567 2.854s4.664-.951 6.567-2.854l112.204-112.202 112.208 112.209c1.902 1.903 4.093 2.848 6.563 2.848 2.478 0 4.668-.951 6.57-2.848l14.274-14.277c1.902-1.902 2.847-4.093 2.847-6.566.001-2.476-.944-4.666-2.846-6.569z'/%3E%3C/svg%3E%0A");`
    : `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='284.929' height='284.929'%3E%3Cdefs/%3E%3Cpath fill='gray' d='M282.082 76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856-2.471 0-4.661.95-6.563 2.856L142.466 174.441 30.262 62.241c-1.903-1.906-4.093-2.856-6.567-2.856-2.475 0-4.665.95-6.567 2.856L2.856 76.515C.95 78.417 0 80.607 0 83.082c0 2.473.953 4.663 2.856 6.565l133.043 133.046c1.902 1.903 4.093 2.854 6.567 2.854s4.661-.951 6.562-2.854L282.082 89.647c1.902-1.903 2.847-4.093 2.847-6.565 0-2.475-.945-4.665-2.847-6.571z'/%3E%3C/svg%3E");`;
};

export const Flex = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  box-shadow: ${props => (props.isOpen ? boxShadow : "")};
  ${props =>
    props.isOpen && `border-radius: ${borderRadius} ${borderRadius} 0 0`};
`;

export const Label = styled.label`
  margin-right: 0.4rem;
`;

export const Select = styled.div`
  cursor: pointer;
  position: relative;
  border: 1px solid lightgray;
  background-color: white;
  z-index: 2;
  ${padding}
  line-height: 1rem;
  display: inline-block;
  border-radius: ${borderRadius};
  ${props => getArrow(props.isOpen)}
  background-size: 10px;
  background-repeat: no-repeat;
  background-position: 95% center;
  box-shadow: ${props => props.isOpen && boxShadow};
  ${props =>
    props.isOpen && `border-radius: ${borderRadius} ${borderRadius} 0 0;`}
  ${props =>
    props.isOpen &&
    props.isOffset &&
    `border-radius:  0 0 ${borderRadius} ${borderRadius};`}
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: ${props => (props.isOffset ? 1 : 3)};
  top: ${props =>
    props.liHeight ? `${props.liHeight / props.displayNumber}px` : "0px"};
  ${props => props.isOffset && `top: 1px;`}
  max-height: ${props => (props.liHeight ? `${props.liHeight}px` : "0px")};
  overflow: auto;
  border: 1px solid lightgray;
  background-color: white;
  outline: none;
  border-radius: ${props =>
    !props.isOffset
      ? `0 0 ${borderRadius} ${borderRadius}`
      : `${borderRadius} ${borderRadius} 0 0`};
  box-shadow: ${boxShadow};
  width: ${props => props.width - 2}px;
  ${props => props.isOffset && `transform: translateY(-100%);`}
`;

export const SelectBox = styled.select`
  border: none;
  font-size: 1rem;
  padding: ${bottomPadding};
  background: transparent;
  ${getArrow(false)}
  background-color: white;
  background-size: 10px;
  background-repeat: no-repeat;
  background-position: 95% center;
  border: 1px solid lightgray;
  border-radius: ${borderRadius};
`;

export const MenuItem = styled.li`
  ${padding}
  line-height: 1rem;
  border-bottom: 1px solid lightgray;
  white-space: nowrap;
  cursor: pointer;
  ${props => props.selected && `background-color: lightgray;`} :last-of-type {
    border-bottom-color: transparent;
  }
`;

export const Hidden = styled.div`
  position: relative;
  opacity: 0;
  z-index: 1;
  ${padding};
  line-height: 1rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid lightgray;
  white-space: nowrap;
  margin-top: -${props => props.liHeight}px;
`;
