import React, { useEffect, useState, useRef } from "react";

import { v4 as uuid } from "uuid";

// Misc
import { publicStyle } from "./publicStyle";
import Modal from "./Modal";
import Box from "./Box";
import List from "./List";
import Description from "./Description";

const useModal = (props) => {
  const classes = publicStyle();
  const refs = useRef({});
  const self = refs.current;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    self.id = uuid();
  }, []);

  return {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(!isOpen),
    classes: classes,
    Box: ({ title, items }) => <Box title={title} items={items} />,
    List: ({ items }) => <List items={items} />,
    Description: ({ children }) => <Description>{children}</Description>,
    Modal: ({ children }) => (
      <Modal
        {...props}
        open={isOpen}
        close={() => setIsOpen(false)}
        id={self.id}
      >
        {children}
      </Modal>
    ),
  };
};

export default useModal;
