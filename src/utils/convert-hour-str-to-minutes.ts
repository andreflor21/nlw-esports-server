// "18:00" => ["18", "00"] => [18,0] => 18 * 60 + 0 = 1080

export function convertHourStrToMinutes(hourStr: String) {
  const [hour, minutes] = hourStr.split(':').map(Number);
  const minutesAmount = hour * 60 + minutes;
  return minutesAmount;
}
