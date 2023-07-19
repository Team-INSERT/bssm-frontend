import useDate from "@/hooks/useDate";
import color from "@/styles/color";
import { font } from "@/styles/font";
import axios from "axios";
import moment from "moment";
import React from "react";
import styled from "styled-components";

const TimeTableBar = () => {
  const [nowDate, setNowDate] = React.useState("");
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const date = useDate();
  const [test, setTest] = React.useState([
    { className: "", startTime: "", endTime: "" },
  ]);

  React.useEffect(() => {
    (async () => {
      const res = await axios.get("https://bssm.kro.kr/api/timetable/2/2");
      setTest(res.data.timetableList.WED);
    })();
  }, []);

  React.useEffect(() => {
    setInterval(() => {
      const HMSDate = date.getHMSDate();
      setNowDate(HMSDate);
    }, 1000);
  }, [date]);

  // test
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 500;
    }
    const { endTime } = test[0];
    const endMoment = moment(endTime, "HH:mm:ss");
    const nowMoment = moment(new Date(), "HH:mm:ss");

    const duration = moment.duration(endMoment.diff(nowMoment));
    const formattedDuration = moment
      .utc(duration.as("milliseconds"))
      .format("HH:mm:ss");
  }, [test]);

  return (
    <Box>
      <BarBox>
        <BarDate>{nowDate}</BarDate>
        <Bar />
      </BarBox>
      <BarList ref={scrollRef}>
        {test.map((item, index) => (
          <BarItem key={index}>
            <BarItemText>test</BarItemText>
          </BarItem>
        ))}
      </BarList>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  width: 56vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BarList = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  overflow-x: scroll;
  padding: 10px;
  padding: 0 28vw;
  border-radius: 6px;
  position: relative;
  gap: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BarItem = styled.div`
  width: 100px;
  padding: 0 120px;
  border-radius: 6px;
  height: 80px;
  display: flex;
  overflow-x: scroll;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const BarItemText = styled.span`
  position: absolute;
`;

const BarBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  justify-content: center;
  align-items: center;
  margin-top: -30vh;
`;

const Bar = styled.div`
  width: 5px;
  border-radius: 5px;
  background-color: ${color.gray};
  height: 160px;
  z-index: 1;
  pointer-events: none;
`;

const BarDate = styled.span`
  ${font.context};
  z-index: 1;
`;

export default TimeTableBar;
