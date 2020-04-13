export class Timetable {

  id: number;
  ref: string;
  dayOfWeek: string;
  startTime: Date;
  endTime: Date;
  expectedBracelet: number;
  expectedFouille: number;
  expectedLitiges: number;
  description: string;

  title: string;
  duration: string;
  expectedTotal: number;

  actualBracelet: number;
  actualFouille: number;
  actualLitiges: number;
  actualTotal: number;
}
