var num1 = -8;
var num2 = 12.5;
var num3 = -6.769;
var num4 = 0;
var num5 = -1;

if (num1>num2 && num1>num3 && num1>num4 && num1>num5)
{
    console.log(num1);
}
else if (num2>num3 && num2>num4 && num2>num5 && num2>num1)
{
    console.log(num2);
}
else if (num3>num4 && num3>num5 && num3>num2 && num3>num1)
{
    console.log(num3);
}
else if (num4>num5 && num4>num3 && num4>num2 && num4>num1)
{
    console.log(num4);
}
else
{
    console.log(num5);
}