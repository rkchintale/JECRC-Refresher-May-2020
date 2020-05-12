import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "words"
})
export class NumberToWordsPipe implements PipeTransform
{
  transform(value: number)
  {
    let w = [ "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten" ];
    let digits = [];
    let str = "";

    digits = value.toString().split("");
    //console.log(digits);
     
    for (let i = 0; i < digits.length; i++)
    {
      str = str + w[ Number(digits[i]) ] + " ";
    }
    return str;
  }
}

