import React from "react";

// React-beautiful-dnd
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DraggableSection = (props) => {
  const { state, setState, ItemContent } = props;

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = reorder(state, result.source.index, result.destination.index);

    setState(items);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {state.map((item, index) => (
              <Item
                key={item.id}
                item={item}
                index={index}
                ItemContent={ItemContent}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

function Item({ item, index, ItemContent }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <ItemContent
            handleProps={provided.dragHandleProps}
            item={item}
            index={index}
          />
        </div>
      )}
    </Draggable>
  );
}

export default DraggableSection;
