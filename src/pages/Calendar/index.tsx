import React, { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import { IEvents, IGroups, time, ITime } from "../../model/calendar";
import { setDisplay } from "../../redux/ducks/loading";
import { DFlexStyled } from "../../styles/global";

import {
  ContainerStyled,
  HoursStyled,
  EventsContainerStyled,
  EventItemStyled,
} from "./styles";

const Calendar: React.FC = () => {
  const initialList: IEvents[] = [
    { start: 30, end: 120 },
    { start: 100, end: 200 },
    { start: 270, end: 430 },
    { start: 480, end: 540 },
    { start: 500, end: 570 },
    { start: 510, end: 600 },
    { start: 550, end: 610 },
    { start: 700, end: 800 },
    { start: 750, end: 850 },
    { start: 760, end: 900 },
  ];
  const [listEvents, setListEvents] = useState<Array<IGroups>>();
  const dispatch = useDispatch();

  function between(current: IEvents, previous: IEvents): Boolean {
    return (
      (current.start <= previous.start && current.end >= previous.end) ||
      (current.start >= previous.start && current.start <= previous.end)
    );
  }

  function layoutDaily() {
    let groups: any[] = [];
    let indexGroup: number = 0;
    let maxColumn: number = 1;
    let indexColumn = 1;
    let list = initialList.map((item, index, array) => {
      if (index !== 0) {
        //compara o item atual com o anterior
        if (between(item, array[index - 1])) {
          let previous: IGroups = groups[indexGroup];
          let conflicItem: boolean = true;
          //Verifica se todos os items estão conflitando
          previous.items.forEach((itemPrevious) => {
            if (!between(item, itemPrevious)) {
              conflicItem = false;
            }
          });
          //Caso não conflite com todos irá para a linha de baixo
          //Senão adiciona mais 1 na coluna, indicando que ficará do lado
          if (conflicItem) {
            indexColumn++;
            maxColumn = indexColumn;
          } else {
            indexColumn = 1;
          }
          const newItem = {
            columns: maxColumn,
            items: previous.items.concat({ ...item, column: indexColumn }),
          };
          groups[indexGroup] = newItem;
        } else {
          indexColumn = 1;
          indexGroup++;
          const newItem = {
            columns: 1,
            items: [{ ...item, column: 1 }],
          };
          groups.push(newItem);
        }
      } else {
        //É o primeiro item, então adiciona na lista
        const newItem = { columns: 1, items: [{ ...item, column: 1 }] };
        groups.push(newItem);
      }

      return item;
    });
    console.log("groups", groups);
    setListEvents(groups);
  }

  useEffect(() => {
    dispatch(setDisplay(true));
    layoutDaily();
  }, []);
  return listEvents && listEvents?.length > 0 ? (
    <ContainerStyled>
      <DFlexStyled justifyContent="center" alignItems="center">
        <HoursStyled>
          {time.map(
            (item: ITime, index: number): ReactNode => (
              <div key={index}>
                {item.hour}
                {item.period !== "" ? <span>{item.period}</span> : ""}
              </div>
            )
          )}
        </HoursStyled>
        <EventsContainerStyled>
          {listEvents.map(
            (group: IGroups, groupIndex: number): ReactNode =>
              group.items.map(
                (item: IEvents, index: number): ReactNode => (
                  <EventItemStyled
                    key={index}
                    top={item.start}
                    height={item.end - item.start}
                    columns={group.columns}
                    column={item.column ? item.column : 1}
                  >
                    <h4>Veículo #{item.index}</h4>
                    <p>
                      "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit..."
                    </p>
                  </EventItemStyled>
                )
              )
          )}
        </EventsContainerStyled>
      </DFlexStyled>
    </ContainerStyled>
  ) : (
    <Loading />
  );
};

export default Calendar;
