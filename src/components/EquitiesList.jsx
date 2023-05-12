import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import ListContent from "./ListContent";

const EquitiesList = ({ list }) => {
  return (
    <Droppable droppableId={"droppable"}>
      {(provided) => (
        <ul
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={"reports__list"}
        >
          {list.map((item, index) => (
            <Draggable
              key={item.symbol}
              draggableId={item.symbol}
              index={index}
            >
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={"reports__item"}
                  // style={{
                  //   Просто не работает из за стиля, 2 часа искал
                  //   animationDelay: `${index * 0.1}s`,
                  // }}
                >
                  <ListContent item={item} />
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default EquitiesList;
