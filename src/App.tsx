import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value); // +가 들어가면 숫자로 바꿔줌 숫자에 + "" 넣어서 문자열로 바꾸는거와 비슷한 느낌
  };
  const onHoursChange = (event:React.FormEvent<HTMLInputElement>) =>{
    setHours(+event.currentTarget.value);
  };


  return ( 
    <div>
      <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes"/>
      <input value={hours} onChange={onHoursChange} type="number" placeholder="Hours"/>
    </div>
  );
}

export default App;
