import React from "react";
import { useSelect } from "downshift";
import {
  Label,
  Flex,
  Select,
  Menu,
  MenuItem,
  Hidden
} from "./SingleSelect.styles";
import { getLongestLabel } from "./SingleSelect.util";

const SingleSelect = ({
  data,
  displayNumber = 5,
  onChange,
  buttonText = "Select"
}) => {
  const {
    isOpen,
    getToggleButtonProps,
    selectedItem,
    getItemProps,
    getMenuProps,
    getLabelProps,
    highlightedIndex
  } = useSelect({
    items: data,
    onSelectedItemChange: changes => onChange(changes)
  });

  const el = React.useRef();
  const [maxHeight, setMaxHeight] = React.useState();
  const [width, setWidth] = React.useState();
  const [isOffset, setIsOffset] = React.useState();

  React.useEffect(() => {
    const data = el.current.querySelector(".list-item").getBoundingClientRect();
    const height = data.height;
    const width = Math.floor(data.width);
    setMaxHeight(height * displayNumber - 1);
    setWidth(width);
  }, [data, displayNumber]);

  const checkOffSet = () => {
    const { bottom } = el.current.getBoundingClientRect();
    const innerHeight = window.innerHeight * 0.75;
    const bottomEdge = Math.floor(bottom + maxHeight);
    if (!isOpen && bottomEdge > innerHeight) {
      setIsOffset(true);
    }
  };

  const longestName = getLongestLabel(data);

  return (
    <div ref={el}>
      <Label {...getLabelProps()}>Choose an president:</Label>
      <Flex isOpen={isOpen} onClick={checkOffSet}>
        <Select isOpen={isOpen} {...getToggleButtonProps()} isOffset={isOffset}>
          {selectedItem || buttonText}
        </Select>
        {isOpen && (
          <Menu
            {...getMenuProps()}
            liHeight={maxHeight}
            displayNumber={displayNumber}
            width={width}
            isOffset={isOffset}
          >
            {selectedItem && (
              <MenuItem
                selected={highlightedIndex === 1000}
                {...getItemProps({ item: buttonText, index: 1000 })}
              >
                Select
              </MenuItem>
            )}

            {data.map((item, index) => (
              <MenuItem
                key={`${item}${index}`}
                selected={highlightedIndex === index}
                {...getItemProps({ item, index })}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        )}
        <Hidden className="list-item" liHeight={maxHeight}>
          {longestName}
        </Hidden>
      </Flex>
    </div>
  );
};

export default SingleSelect;
