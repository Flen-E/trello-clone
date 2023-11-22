import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
  display : flex;
  flex-direction: column;
`;

const Title = styled.div`
    text-align : center;
    font-weight : 600;
    margin-bottom : 10px;
    font-size : 20px;
`;

interface IAreaProps {
  isDraggingFromThis :boolean;
  isDraggingOver : boolean
}

const Area = styled.div<IAreaProps>`
  background-color: ${props => props.isDraggingOver ? "#dfe6e9": props.isDraggingFromThis ? "#b2bec3" : "transparent"};
  flex-grow : 1;
  transition : background-color .3s ease-in-out;
  padding: 20px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic,info) => (
          <Area isDraggingOver={info.isDraggingOver} isDraggingFromThis={Boolean(info.draggingFromThisWith)} ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo} index={index} toDo={toDo} />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}
export default Board;
