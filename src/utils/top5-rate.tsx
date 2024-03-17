import {Fifth, First, Fourth, Second, Third} from '../assets/images';

export const top5Rate = (data: number) => {
  switch (data) {
    case 1:
      return First;
    case 2:
      return Second;
    case 3:
      return Third;
    case 4:
      return Fourth;
    case 5:
      return Fifth;

    default:
      break;
  }
};
