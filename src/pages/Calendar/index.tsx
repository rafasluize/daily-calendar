import { group } from "console";
import React, { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import { IEvents } from "../../model/calendar";
import { setDisplay } from "../../redux/ducks/loading";
import { DFlexStyled } from "../../styles/global";

import {
  ContainerStyled,
  HoursStyled,
  EventsContainerStyled,
  EventItemStyled,
} from "./styles";

const Calendar: React.FC = () => {
  const [listEvents, setListEvents] = useState<Array<IEvents>>([
    { start: 30, end: 120 },
    { start: 270, end: 430 },
    { start: 480, end: 540 },
    { start: 500, end: 570 },
    { start: 550, end: 610 },
  ]);
  const [listEventsChanged, setListEventsChanged] = useState<Array<IEvents>>(
    []
  );
  const [listGroups, setListGroups] = useState<Array<IEvents>>([]);
  const dispatch = useDispatch();

  function between(x: number, min: number, max: number) {
    return x >= min && x <= max;
  }

  function layoutDaily(events: Array<IEvents>) {
    let groupId = 1;
    let floatId = 0;
    let groups: any[] = [];
    let list = events.map((item, index, array) => {
      let next = array[index + 1];
      if (next)
        if (between(item.start, next.start, next.end)) {
          if (groups[groupId] === undefined) {
            groups[groupId] = [];
          }
          if (item.groupId) {
            groups[groupId].push(item);
          }
          groups[groupId].push(next);

          item.groupId = groupId;
          item.floatId = floatId++;
          next.groupId = groupId;
        } else {
          groupId++;
          floatId = 0;
        }
      console.log(item);
      console.log(array);
      debugger;

      return item;
    });
    setListEvents(list);
    setListGroups(groups);
    setListEventsChanged(listEvents);
  }

  useEffect(() => {
    // dispatch(setDisplay(true));
    layoutDaily(listEvents);
  }, [listEvents]);

  useEffect(() => {
    let listColumns: any[] = listEventsChanged;
    listColumns.forEach((element) => {
      if (!element.groupId) {
        element.columns = 1;
        return;
      }
      element.columns = listGroups.filter(
        (e) => element.start >= e.start && element.end <= e.end
      ).length;
    });
    setListEventsChanged(listColumns);
    console.log(listColumns);
  }, [listGroups]);

  return listEventsChanged?.length > 0 ? (
    <ContainerStyled>
      <DFlexStyled justifyContent="center" alignItems="center">
        <HoursStyled>
          <div>
            8:00 <span>am</span>
          </div>
          <div>8:30</div>
          <div>
            9:00 <span>am</span>
          </div>
          <div>9:30</div>
          <div>
            10:00 <span>am</span>
          </div>
          <div>10:30</div>
          <div>
            11:00 <span>am</span>
          </div>
          <div>11:30</div>
          <div>
            12:00 <span>am</span>
          </div>
          <div>12:30</div>
          <div>
            1:00 <span>pm</span>
          </div>
          <div>1:30</div>
          <div>
            2:00 <span>pm</span>
          </div>
          <div>2:30</div>
          <div>
            3:00 <span>pm</span>
          </div>
          <div>3:30</div>
          <div>
            4:00 <span>pm</span>
          </div>
          <div>4:30</div>
          <div>
            5:00 <span>pm</span>
          </div>
          <div>5:30</div>
          <div>
            6:00 <span>pm</span>
          </div>
          <div>6:30</div>
          <div>
            7:00 <span>pm</span>
          </div>
          <div>7:30</div>
          <div>
            8:00 <span>pm</span>
          </div>
        </HoursStyled>
        <EventsContainerStyled>
          {listEventsChanged.map(
            (item: IEvents, index: number): ReactNode => (
              <EventItemStyled
                top={item.start}
                height={item.end - item.start}
                width={item.columns ? item.columns : 1}
              >
                <h4>Veículo #{index + 1}</h4>
                <p>
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
                </p>
              </EventItemStyled>
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
